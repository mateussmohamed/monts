import React, { FC } from 'react'
import { Box, Text } from 'rebass/styled-components'
import { Label, Input, InputProps } from '@rebass/forms/styled-components'
import { ErrorMessage, FieldErrors, FieldValues } from 'react-hook-form'

interface Props extends InputProps {
  label: string
  name: string
  type?: string
  value?: string
  defaultValue?: string
  status?: string
  placeholder?: string
  disabled?: boolean
  register: Function

  errors: FieldErrors<FieldValues>
}

const Field: FC<Props> = ({
  name,
  label,
  disabled,
  value,
  errors,
  register,
  defaultValue = '',
  type = 'text',
  placeholder = 'Your text goes here'
}) => {
  const hasError = errors[name]

  return (
    <Box width={1} px={2} mb={3}>
      <Label htmlFor="name">{label}</Label>
      <Input
        ref={register}
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

      <ErrorMessage errors={errors} name={name}>
        {({ message }): JSX.Element => (
          <Text px={1} fontSize={1} color={hasError ? 'red' : 'darkGray'}>
            {message}
          </Text>
        )}
      </ErrorMessage>
    </Box>
  )
}

export default Field
