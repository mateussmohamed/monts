import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt'

import { INITIAL_AMOUNT_BALANCE, BRL_ID } from '@monts/constants'
import prisma from '@monts/lib/prisma'
import omit from '@monts/utils/omit'

async function handle(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    const userReq: User = JSON.parse(req.body)

    const userFound = await prisma.user.findOne({
      where: {
        email: userReq.email
      }
    })

    if (userFound) {
      return res.status(409).json({ error: 'Usuário já cadastrado.' })
    }

    const salt = bcrypt.genSaltSync()
    const hash = bcrypt.hashSync(userReq.password, salt)

    const savedUser = await prisma.user.create({
      data: {
        ...userReq,
        password: hash,
        wallet: {
          create: [
            {
              balance: INITIAL_AMOUNT_BALANCE,
              currency: {
                connect: {
                  id: BRL_ID
                }
              }
            }
          ]
        }
      }
    })

    res.status(200).json(omit(savedUser, ['password']))
  } catch (error) {
    return res.status(500).json({ error: 'Internal Error' })
  }
}

export default handle
