import { NextApiResponse } from 'next'
import bcrypt from 'bcrypt'
import withSession from '@monts/lib/with-session'

import prisma from '@monts/lib/prisma'
import omit from '@monts/utils/omit'

async function handle(req: NextApiRequestWithSession, res: NextApiResponse): Promise<void> {
  try {
    const { email, password } = req.body

    const user = await prisma.user.findOne({
      where: {
        email: email
      }
    })

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' })
    }

    const matchPassword = bcrypt.compareSync(password, user.password)

    if (matchPassword) {
      const userSession = { isLoggedIn: true, ...omit(user, ['password']) }
      req.session.set('user', userSession)

      await req.session.save()

      return res.status(200).json({ data: userSession })
    }

    return res.status(400).json({ error: 'Usuário inválido.' })
  } catch (error) {
    res.status(500).json({ error: 'Internal Error' })
  }
}

export default withSession(handle)
