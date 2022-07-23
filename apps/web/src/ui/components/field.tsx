import { ErrorMessage } from '@hookform/error-message'
import { Input, InputProps, Label } from '@rebass/forms/styled-components'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Box, Text } from 'rebass/styled-components'

interface FieldProps extends InputProps {
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

export function Field({
  name,
  label,
  disabled,
  value,
  validate,
  defaultValue = '',
  type = 'text',
  placeholder = 'Your text goes here'
}: FieldProps) {
  const {
    register,
    formState: { errors }
  } = useFormContext()
  const hasError = errors ? errors[name] : false

  return (
    <Box width={1} px={2} mb={3}>
      <Label htmlFor="name">{label}</Label>
      <Input
        {...register(name, { ...validate })}
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
