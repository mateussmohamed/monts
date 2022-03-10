import { Story, Meta } from '@storybook/react/types-6-0'

import TransactionItem, { TransactionItemProps } from '.'

export default {
  title: 'TransactionItem',
  component: TransactionItem
} as Meta

export const Default: Story<TransactionItemProps> = (args) => (
  <div style={{ padding: '3rem' }}>
    <TransactionItem {...args} />
  </div>
)

Default.args = {
  kind: 'withdrawn',
  currencyValue: '$ 204',
  cryptoValue: '0.021 BTC',
  date: 'Aug 19, 2019'
}
