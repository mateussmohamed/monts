import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type Props = {
  children: React.ReactNode
  onSubmit: SubmitForm
  validation: yup.AnyObjectSchema
}

function Form({ children, onSubmit, validation }: Props): JSX.Element {
  const methods = useForm({
    resolver: yupResolver(validation)
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  )
}

export default Form
