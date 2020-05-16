import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt'

import prisma from '@monts/libs/prisma'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    const body: User = req.body

    const salt = bcrypt.genSaltSync()
    const hash = bcrypt.hashSync(body.password, salt)

    const { password, ...savedUser } = await prisma.user.create({
      data: {
        ...body,
        password: hash
      }
    })

    res.status(200).json(savedUser)
  } catch (error) {
    console.log(error)

    res.status(409).json(error)
  }
}
