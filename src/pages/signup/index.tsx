import React from 'react'
import { useRouter } from 'next/router'
import * as yup from 'yup'
import Link from 'next/link'
import { useForm, FieldValues } from 'react-hook-form'
import { Flex, Text } from 'rebass/styled-components'

import AuthScreen from '@monts/components/auth-screen'

import Field from '@monts/components/field'
import Button from '@monts/components/button'

import api from '@monts/services/api'

type Inputs = {
  name: string
  lastName: string
  email: string
  password: string
}

const signUpSchema = yup.object().shape({
  firstName: yup.string().required('este campo obrigatório.'),
  lastName: yup.string().required('este campo obrigatório.'),
  email: yup.string().email('email invalido.').required('este campo obrigatório.'),
  password: yup.string().required('este campo obrigatório.')
})

function SignUp(): JSX.Element {
  const router = useRouter()
  const { register, handleSubmit, errors } = useForm<Inputs>({ validationSchema: signUpSchema })

  async function onSubmit(formData: FieldValues): Promise<void> {
    try {
      const response = await api('/api/user/signup', {
        method: 'POST',
        body: JSON.stringify(formData)
      })

      console.log({ response })

      router.push('/')
    } catch (error) {
      console.log({ error })
    }
  }

  return (
    <AuthScreen title="Criar Conta" image="/static/images/illustration/office.svg">
      <Flex flexDirection="column" alignItems="center" as="form" onSubmit={handleSubmit(onSubmit)} width={1}>
        <Field name="firstName" label="Nome" placeholder="Informe seu nome" register={register} errors={errors} />

        <Field
          name="lastName"
          label="Sobrenome"
          placeholder="Informe seu sobrenome"
          register={register}
          errors={errors}
        />

        <Field
          name="email"
          label="Email"
          type="email"
          placeholder="Informe o seu melhor email"
          register={register}
          errors={errors}
        />

        <Field
          name="password"
          label="Senha"
          type="password"
          placeholder="Informe uma senha segura"
          register={register}
          errors={errors}
        />

        <Button minWidth={200} mt={2} mb={3} type="submit" disabled={Object.keys(errors).length > 0}>
          Vamos começar
        </Button>

        <Text as="p" color="midnightBlue" textAlign="center" fontWeight="normal" fontSize={[2, 3]}>
          Já possui uma conta?{' '}
          <Link href="/login" passHref>
            <Text as="a" color="primary" fontWeight="semi" fontSize={[2, 3]}>
              Login
            </Text>
          </Link>
        </Text>
      </Flex>
    </AuthScreen>
  )
}
export default SignUp
