import React, { FC } from 'react'
import { Box, Text } from 'rebass/styled-components'
import { Label, Input, InputProps } from '@rebass/forms/styled-components'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

interface Props extends InputProps {
  label: string
  name: string
  type?: string
  value?: string
  defaultValue?: string
  status?: string
  placeholder?: string
  disabled?: boolean
  validate?: Record<string, unknown>
}

const Field: FC<Props> = ({
  name,
  label,
  disabled,
  value,
  validate,
  defaultValue = '',
  type = 'text',
  placeholder = 'Your text goes here'
}) => {
  const { register, errors } = useFormContext()
  const hasError = errors[name] || false

  return (
    <Box width={1} px={2} mb={3}>
      <Label htmlFor="name">{label}</Label>
      <Input
        ref={register({ ...validate })}
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={defaultValue}
        value={value}
        type={type}
        id={name}
        name={name}
        mb={1}
        sx={{
          borderBottomColor: hasError ? 'red' : 'lightGray',
          '&:focus, &:active': {
            borderBottomColor: hasError ? 'red' : disabled ? 'lightGray' : 'primary'
          }
        }}
      />

      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <Text px={1} fontSize={1} color={hasError ? 'red' : 'darkGray'}>
            {message}
          </Text>
        )}
      />
    </Box>
  )
}

export default Field
