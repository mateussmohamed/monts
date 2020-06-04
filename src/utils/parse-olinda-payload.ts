type OlindaPayload = {
  cotacaoCompra: number
  cotacaoVenda: number
  dataHoraCotacao: string
}

type OlindaParsed = {
  buy: number
  sell: number
  date: string
}
export default function parseOlindaPayload(value: OlindaPayload): OlindaParsed {
  return {
    buy: value.cotacaoCompra,
    sell: value.cotacaoVenda,
    date: value.dataHoraCotacao
  }
}
