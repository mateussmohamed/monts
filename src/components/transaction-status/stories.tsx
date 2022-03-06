import { Story, Meta } from '@storybook/react/types-6-0'

import TransactionStatus, { TransactionStatusProps } from '.'

export default {
  title: 'TransactionStatus',
  component: TransactionStatus,
  args: {
    status: 'pending'
  }
} as Meta

export const Default: Story<TransactionStatusProps> = (args) => (
  <div
    style={{
      display: 'flex',
      padding: 40,
      backgroundColor: '#0D1F3C',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <TransactionStatus {...args} />
  </div>
)
