import React from 'react'
import * as yup from 'yup'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { Flex, Box, Text } from 'rebass/styled-components'

import Field from '@monts/components/field'
import Button from '@monts/components/button'

type Inputs = {
  name: string
  lastName: string
  email: string
  password: string
}

const signUpSchema = yup.object().shape({
  name: yup.string().required('este campo obrigatório.'),
  lastName: yup.string().required('este campo obrigatório.'),
  email: yup.string().email('email invalido.').required('este campo obrigatório.'),
  password: yup.string().required('este campo obrigatório.')
})

const SignUp: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<Inputs>({ validationSchema: signUpSchema })

  const onSubmit = (data) => console.log(data)

  return (
    <Box flex={1} width={1} pt={20} pb={60} variant="containerForm">
      <Flex flexDirection="column" alignItems="center" as="form" onSubmit={handleSubmit(onSubmit)} width={1}>
        <Field name="name" label="Nome" placeholder="Informe seu nome" register={register} errors={errors} />

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

        <Button minWidth={200} mb={16} type="submit">
          Vamos começar
        </Button>

        <Text as="p" color="midnightBlue" textAlign="center" fontWeight="normal" fontSize={[16, 18]}>
          Já possui uma conta?{' '}
          <Link href="/login" passHref>
            <Text as="a" color="primary" fontWeight="semi" fontSize={[16, 18]}>
              Login
            </Text>
          </Link>
        </Text>
      </Flex>
    </Box>
  )
}
export default SignUp
