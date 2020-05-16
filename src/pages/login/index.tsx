import React from 'react'
import * as yup from 'yup'
import Link from 'next/link'
import { useForm, FieldValues } from 'react-hook-form'
import { Flex, Text } from 'rebass/styled-components'

import Field from '@monts/components/field'
import Button from '@monts/components/button'
import AuthScreen from '@monts/components/auth-screen'

import api from '@monts/services/api'

type Inputs = {
  email: string
  password: string
}

const signUpSchema = yup.object().shape({
  email: yup.string().email('email invalido.').required('este campo obrigatório.'),
  password: yup.string().required('este campo obrigatório.')
})

function Login(): JSX.Element {
  const { register, handleSubmit, errors } = useForm<Inputs>({ validationSchema: signUpSchema })

  async function onSubmit(formData: FieldValues): Promise<void> {
    try {
      const response = await api('/api/user/login', {
        method: 'POST',
        body: JSON.stringify(formData)
      })

      console.log({ response })
    } catch (error) {
      console.log({ error })
    }
  }

  return (
    <AuthScreen title="Bem vindo novamente" image="/static/images/illustration/login.svg">
      <Flex flexDirection="column" alignItems="center" as="form" onSubmit={handleSubmit(onSubmit)} width={1}>
        <Field name="email" label="Email" type="email" register={register} errors={errors} />

        <Field name="password" label="Senha" type="password" register={register} errors={errors} />

        <Button minWidth={200} mt={100} mb={24} disabled={Object.keys(errors).length > 0}>
          Login
        </Button>

        <Text as="p" color="midnightBlue" textAlign="center" fontWeight="normal" fontSize={[16, 18]}>
          Não possui uma conta{' '}
          <Link href="/signup" passHref>
            <Text as="a" color="primary" fontWeight="semi" fontSize={[16, 18]}>
              Crie agora
            </Text>
          </Link>
        </Text>
      </Flex>
    </AuthScreen>
  )
}

export default Login
