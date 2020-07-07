import React from 'react'

import TransactionItem from '.'
export default {
  title: 'TransactionItem',
  component: TransactionItem
}

export const Withdrawn = (): JSX.Element => (
  <div style={{ padding: '3rem' }}>
    <TransactionItem kind="Withdrawn" currencyValue="$ 204" cryptoValue="0.021 BTC" date="Aug 19, 2019" />
  </div>
)

export const Deposited = (): JSX.Element => (
  <div style={{ padding: '3rem' }}>
    <TransactionItem kind="Deposited" currencyValue="$ 695.03" cryptoValue="3.21 ETH" date="Aug 16, 2019" />
  </div>
)

export const Sent = (): JSX.Element => (
  <div style={{ padding: '3rem' }}>
    <TransactionItem kind="Sent" currencyValue="$ 250" cryptoValue="0.021 NEO" date="Aug 10, 2019" />
  </div>
)
