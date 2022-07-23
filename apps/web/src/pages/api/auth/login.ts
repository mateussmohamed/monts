import { NextApiResponse } from 'next'
import bcrypt from 'bcrypt'
import withSession from 'domains/shared/lib/hocs/with-session'

import prisma from 'domains/shared/lib/services/prisma'
import omit from 'domains/shared/lib/helpers/omit'

async function handle(req: NextApiRequestWithSession, res: NextApiResponse): Promise<void> {
  try {
    const { email, password } = req.body

    const user = await prisma.user.findFirst({
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

      return res.status(200).json(userSession)
    }

    return res.status(400).json({ error: 'Usuário inválido.' })
  } catch (error) {
    res.status(500).json({ error: 'Internal Error' })
  } finally {
    await prisma.$disconnect()
  }
}

export default withSession(handle)
