import { screen } from '@testing-library/react'
import { renderWithTheme } from 'domains/shared/lib/utils/tests/helpers'

import TransactionItem from '.'

const props = {
  currencyValue: '$ 204',
  cryptoValue: '0.021 BTC',
  date: 'Aug 19, 2019'
}

describe('<TransactionItem />', () => {
  it('should render correctly', () => {
    renderWithTheme(<TransactionItem {...props} kind="withdrawn" />)

    expect(screen.getByText('$ 204')).toBeInTheDocument()
    expect(screen.getByText('withdrawn')).toBeInTheDocument()
    expect(screen.getByText('0.021 BTC')).toBeInTheDocument()
    expect(screen.getByText('Aug 19, 2019')).toBeInTheDocument()
    expect(screen.getByLabelText(/withdrawn money/i)).toBeInTheDocument()
  })

  it('should render with deposited status', () => {
    renderWithTheme(<TransactionItem {...props} kind="deposited" />)

    expect(screen.getByText(/deposited/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/deposited money/i)).toBeInTheDocument()
  })

  it('should render with sent status', () => {
    renderWithTheme(<TransactionItem {...props} kind="sent" />)

    expect(screen.getByText('sent')).toBeInTheDocument()
    expect(screen.getByLabelText(/sent money/i)).toBeInTheDocument()
  })
})
