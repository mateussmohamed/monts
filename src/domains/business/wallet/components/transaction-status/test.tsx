import { screen } from '@testing-library/react'
import { renderWithTheme } from 'domains/shared/lib/utils/tests/helpers'

import TransactionStatus from '.'

describe('<TransactionStatus />', () => {
  it('should render with pending status icon by default', () => {
    renderWithTheme(<TransactionStatus />)

    expect(screen.getByLabelText(/pending status/i)).toBeInTheDocument()
  })

  it('should render with rejected status icon', () => {
    renderWithTheme(<TransactionStatus status="rejected" />)

    expect(screen.getByLabelText(/rejected status/i)).toBeInTheDocument()
  })

  it('should render with withdrawn status icon', () => {
    renderWithTheme(<TransactionStatus status="withdrawn" />)

    expect(screen.getByLabelText(/withdrawn status/i)).toBeInTheDocument()
  })

  it('should render with sent status icon', () => {
    renderWithTheme(<TransactionStatus status="sent" />)

    expect(screen.getByLabelText(/sent status/i)).toBeInTheDocument()
  })

  it('should render with exchanged status icon', () => {
    renderWithTheme(<TransactionStatus status="exchanged" />)

    expect(screen.getByLabelText(/exchanged status/i)).toBeInTheDocument()
  })

  it('should render with deposited status icon', () => {
    renderWithTheme(<TransactionStatus status="deposited" />)

    expect(screen.getByLabelText(/deposited status/i)).toBeInTheDocument()
  })
})
