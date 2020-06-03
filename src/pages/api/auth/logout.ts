import { NextApiResponse } from 'next'

import withSession from '@monts/lib/with-session'

async function handle(req: NextApiRequestWithSession, res: NextApiResponse): Promise<void> {
  try {
    req.session.destroy()

    return res.status(200).json({ data: { isLoggedIn: false } })
  } catch (error) {
    res.status(500).json({ error: 'Internal Error' })
  }
}

export default withSession(handle)
