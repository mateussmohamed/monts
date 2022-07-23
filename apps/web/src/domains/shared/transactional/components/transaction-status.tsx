import { Flex } from 'rebass'

import * as Icons from './transaction-status-icons'

export type TransactionStatus = 'pending' | 'rejected' | 'withdrawn' | 'sent' | 'deposited' | 'exchanged'

export type TransactionStatusProps = {
  status?: TransactionStatus
}

const statusIcons = {
  deposited: <Icons.DepositedIcon />,
  exchanged: <Icons.ExchangedIcon />,
  sent: <Icons.SentIcon />,
  withdrawn: <Icons.WithdrawnIcon />,
  rejected: <Icons.RejectedIcon />,
  pending: <Icons.PendingIcon />
}

export function TransactionStatus({ status = 'pending' }: TransactionStatusProps) {
  return (
    <Flex width={60} height={60}>
      {statusIcons[status]}
    </Flex>
  )
}
