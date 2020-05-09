import React, { FC, HTMLAttributes } from 'react'
import { Box, Text } from 'rebass/styled-components'
import { Label, Input } from '@rebass/forms/styled-components'

interface Props extends HTMLAttributes<HTMLElement> {
  label: string
  value?: string
  status?: string
  message?: string
  disabled?: boolean
}

const Field: FC<Props> = ({
  id,
  label,
  disabled,
  defaultValue,
  value,
  message,
  status = 'primary',
  placeholder = 'Your text goes here'
}) => {
  const hasError = status === 'error'

  return (
    <Box width={1} px={2}>
      <Label htmlFor="name">{label}</Label>
      <Input
        data-testid="ms-field"
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={defaultValue}
        value={value}
        id={id}
        name={id}
        mb={1}
        sx={{
          borderBottomColor: hasError ? 'red' : 'lightGray',
          '&:focus, &:active': {
            borderBottomColor: hasError ? 'red' : disabled ? 'lightGray' : 'primary'
          }
        }}
      />
      {message && (
        <Text px={1} fontSize={1} color={hasError ? 'red' : 'darkGray'}>
          {message}
        </Text>
      )}
    </Box>
  )
}
export default Field
