import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt'

import { INITIAL_AMOUNT_BALANCE } from 'consts'
import prisma from 'lib/prisma'
import omit from 'utils/omit'

async function handle(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    const { firstName, lastName, email, password }: User = JSON.parse(req.body)

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
