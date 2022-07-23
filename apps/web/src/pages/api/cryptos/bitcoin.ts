import { NextApiResponse } from 'next'
import { MERCADO_BITCOIN_API } from 'domains/shared/lib/constants'
import fetch from 'domains/shared/lib/helpers/fetch'

async function handle(_req: unknown, res: NextApiResponse): Promise<void> {
  try {
    const url = `${MERCADO_BITCOIN_API}/BTC/ticker`
    const { ticker } = await fetch(url)

    return res.status(200).json({ data: ticker })
  } catch (error) {
    res.status(500).json({ error: 'Internal Error' })
  }
}

export default handle
