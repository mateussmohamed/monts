import { NextApiResponse, NextApiRequest } from 'next'
import { format } from 'date-fns'

import { OLINDA_API } from 'domains/shared/lib/constants'
import fetch from 'domains/shared/lib/helpers/fetch'
import parseOlindaPayload from 'domains/shared/lib/utils/parse-olinda-payload'

async function handle(_req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    const date = format(new Date(), 'MM-dd-yyyy')
    const url = `${OLINDA_API}/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${date}'`
    const data = await fetch<OlindaPayload[]>(url)
    const { cotacaoCompra, cotacaoVenda, dataHoraCotacao } = data[0]

    const payload = {
      cotacaoCompra,
      cotacaoVenda,
      dataHoraCotacao
    }

    return res.status(200).json({ data: parseOlindaPayload(payload) })
  } catch (error) {
    res.status(500).json({ error: 'Internal Error' })
  }
}

export default handle
