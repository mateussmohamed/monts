import { FieldValues } from 'react-hook-form'
import { toast } from 'react-toastify'
import Link from 'next/link'
import fetch from 'domains/shared/lib/helpers/fetch'
import useUser from 'domains/shared/lib/hooks/use-user'
import { Button, Flex, Text } from 'rebass/styled-components'
import { AuthScreen, Field, Form } from 'ui/components'
import * as yup from 'yup'

const signUpSchema = yup.object().shape({
  email: yup.string().email('email inválido.').required('este campo é obrigatório..'),
  password: yup.string().required('este campo é obrigatório..')
})

const Login = () => {
  const { mutateUser } = useUser({
    redirectTo: '/wallet',
    redirectIfFound: true
  })

  async function onSubmit(formData: FieldValues): Promise<void> {
    try {
      await mutateUser(
        fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })
      )
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error?.message)
      }
    }
  }

  return (
    <AuthScreen title="Bem vindo novamente" image="/static/images/illustration/login.svg">
      <Form onSubmit={onSubmit} validation={signUpSchema}>
        <Flex flexDirection="column" alignItems="center" width={1}>
          <Field name="email" label="Email" type="email" placeholder="Informe o seu melhor email" />

          <Field name="password" label="Senha" type="password" placeholder="Informe uma senha segura" />

          <Button minWidth={200} mt={100} mb={24}>
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
      </Form>
    </AuthScreen>
  )
}

export default Login
