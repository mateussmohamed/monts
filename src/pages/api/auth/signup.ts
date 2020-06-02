import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt'

import prisma from '@monts/lib/prisma'
import omit from '@monts/utils/omit'

async function handle(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    const body: User = req.body

    const user = await prisma.user.findOne({
      where: {
        email: body.email
      }
    })

    if (user) {
      return res.status(409).json({ error: 'Usuário já cadastrado.' })
    }

    const salt = bcrypt.genSaltSync()
    const hash = bcrypt.hashSync(body.password, salt)

    const savedUser = await prisma.user.create({
      data: {
        ...body,
        password: hash
      }
    })

    res.status(200).json({ data: omit(savedUser, ['password']) })
  } catch (error) {
    return res.status(409).json({ error: 'Internal Error' })
  }
}

export default handle
