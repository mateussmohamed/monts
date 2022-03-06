import { NextApiResponse } from 'next'
import withSession from 'lib/with-session'

import omit from 'utils/omit'

async function handle(req: NextApiRequestWithSession, res: NextApiResponse): Promise<void> {
  try {
    const user = req.session.get('user')

    if (user) {
      return res.status(200).json({ isLoggedIn: true, ...omit(user, ['password']) })
    }

    return res.status(200).json({ isLoggedIn: false })
  } catch (error) {
    res.status(500).json({ error: 'Internal Error' })
  }
}

export default withSession(handle)
