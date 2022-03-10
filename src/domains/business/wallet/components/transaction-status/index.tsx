import { Flex } from 'rebass'

import * as Icons from './icons'

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

function TransactionStatus({ status = 'pending' }: TransactionStatusProps) {
  return (
    <Flex width={60} height={60}>
      {statusIcons[status]}
    </Flex>
  )
}

export default TransactionStatus
