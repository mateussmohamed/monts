import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt'

import prisma from '@monts/libs/prisma'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, password } = req.body

    const user = await prisma.user.findOne({
      where: {
        email: email
      }
    })

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    if (bcrypt.compareSync(password, user.password)) {
      return res.status(200).json({ data: true })
    }

    return res.status(400).json({ message: 'Invalid user' })
  } catch (error) {
    res.status(409).json({ error })
  }
}
