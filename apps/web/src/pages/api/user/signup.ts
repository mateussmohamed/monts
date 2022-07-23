import { NextApiRequest, NextApiResponse } from 'next'
import * as bcrypt from 'bcrypt'
import { INITIAL_AMOUNT_BALANCE } from 'domains/shared/lib/constants'
import omit from 'domains/shared/lib/helpers/omit'
import prisma from 'domains/shared/lib/services/prisma'

async function handle(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    const { firstName, lastName, email, password }: User = JSON.parse(req.body)

    if (!firstName || !lastName || !email || !password) {
      throw Error('Invalid params')
    }

    const userFound = await prisma.user.findFirst({
      where: {
        email: email
      }
    })

    if (userFound) {
      return res.status(409).json({ error: 'Usuário já cadastrado.' })
    }

    const salt = bcrypt.genSaltSync()
    const hash = bcrypt.hashSync(password, salt)

    const defaultCoin = await prisma.currency.findFirst({
      where: {
        abbreviation: 'BTC'
      }
    })

    const savedUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hash,
        securityPin: '',
        wallet: {
          create: [
            {
              balance: INITIAL_AMOUNT_BALANCE,
              currency: {
                connect: {
                  id: defaultCoin?.id
                }
              }
            }
          ]
        }
      }
    })

    res.status(200).json(omit(savedUser, ['password']))
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal Error' })
  } finally {
    await prisma.$disconnect()
  }
}

export default handle
