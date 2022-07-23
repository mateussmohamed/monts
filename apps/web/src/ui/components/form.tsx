import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type FormProps = {
  children: React.ReactNode
  onSubmit: SubmitForm
  validation: yup.AnyObjectSchema
}

export const Form = ({ children, onSubmit, validation }: FormProps) => {
  const methods = useForm({
    resolver: yupResolver(validation)
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  )
}
