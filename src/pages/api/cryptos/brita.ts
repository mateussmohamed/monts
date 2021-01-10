import { NextApiResponse } from 'next'
import { format } from 'date-fns'

import { OLINDA_API } from 'constants'
import fetch from 'lib/fetch'
import parseOlindaPayload from 'utils/parse-olinda-payload'

async function handle(_req: unknown, res: NextApiResponse): Promise<void> {
  try {
    const date = format(new Date(), 'MM-dd-yyyy')
    const url = `${OLINDA_API}/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${date}'`
    const { value } = await fetch(url)

    return res.status(200).json({ data: parseOlindaPayload(value[0]) })
  } catch (error) {
    res.status(500).json({ error: 'Internal Error' })
  }
}

export default handle
