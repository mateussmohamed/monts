import { FieldValues } from 'react-hook-form'
import { toast } from 'react-toastify'
import Link from 'next/link'
import { useRouter } from 'next/router'
import fetch from 'domains/shared/lib/helpers/fetch'
import { Button, Flex, Text } from 'rebass/styled-components'
import { AuthScreen, Field, Form } from 'ui/components'
import * as yup from 'yup'

const signUpSchema = yup.object().shape({
  firstName: yup.string().required('este campo é obrigatório..'),
  lastName: yup.string().required('este campo é obrigatório..'),
  email: yup.string().email('email inválido.').required('este campo é obrigatório..'),
  password: yup.string().required('este campo é obrigatório..')
})

const SignUp = () => {
  const router = useRouter()

  async function onSubmit(formData: FieldValues): Promise<void> {
    try {
      const data = await fetch('/api/user/signup', {
        method: 'POST',
        body: JSON.stringify(formData)
      })

      if (data) {
        toast.success('User registered')

        router.push('/login')
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    }
  }

  return (
    <AuthScreen title="Criar Conta" image="/static/images/illustration/office.svg">
      <Form onSubmit={onSubmit} validation={signUpSchema}>
        <Flex flexDirection="column" alignItems="center" width={1}>
          <Field name="firstName" label="Nome" placeholder="Informe seu nome" />

          <Field name="lastName" label="Sobrenome" placeholder="Informe seu sobrenome" />

          <Field name="email" label="Email" type="email" placeholder="Informe o seu melhor email" />

          <Field name="password" label="Senha" type="password" placeholder="Informe uma senha segura" />

          <Button minWidth={200} mt={2} mb={3} type="submit">
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
      </Form>
    </AuthScreen>
  )
}

export default SignUp
