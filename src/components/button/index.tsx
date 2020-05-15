import React, { FC } from 'react'
import { Button, ButtonProps } from 'rebass/styled-components'

interface Props extends ButtonProps {
  variant?: string
  loading?: boolean
  disabled?: boolean
}

const CustomButton: FC<Props> = ({ children, loading, variant = 'primary', ...props }) => {
  return (
    <Button variant={variant} {...props}>
      {loading ? 'Loading...' : children}
    </Button>
  )
}
export default CustomButton
