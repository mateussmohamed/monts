import React from 'react'
import { FormContext, useForm } from 'react-hook-form'
import * as yup from 'yup'

type Props = {
  children: React.ReactNode
  onSubmit: SubmitForm
  validation: yup.ObjectSchema
}

function Form({ children, onSubmit, validation }: Props): JSX.Element {
  const methods = useForm({ validationSchema: validation })

  return (
    <FormContext {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormContext>
  )
}

export default Form
