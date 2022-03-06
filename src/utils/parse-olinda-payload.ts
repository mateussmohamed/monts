export default function parseOlindaPayload(value: OlindaPayload): OlindaResponse {
  return {
    buy: value.cotacaoCompra,
    sell: value.cotacaoVenda,
    date: value.dataHoraCotacao
  }
}
