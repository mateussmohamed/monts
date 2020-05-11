import React from 'react'
import Link from 'next/link'
import { Flex, Box, Image, Text, Heading } from 'rebass/styled-components'

import Field from '@monts/components/field'
import Button from '@monts/components/button'

const SignUp: React.FC = () => (
  <Flex bg="lightBlue" flexDirection="column" alignItems="center" height="100vh">
    <Box width={1} pt={20}>
      <Flex flexDirection="column" alignItems="center">
        <Heading color="midnightBlue" textAlign="center" fontWeight="semi" mb={90} fontSize={[26, 32]}>
          Criar Conta
        </Heading>
        <Image src="/static/images/illustration/office.svg" width={310} />
      </Flex>
    </Box>

    <Box flex={1} width={1} pt={20} pb={60} variant="containerForm">
      <Flex flexDirection="column" alignItems="center">
        <Field label="Nome" />
        <Field label="Sobrenome" />
        <Field label="Email" type="email" />
        <Field label="Senha" type="password" />
        <Button minWidth={200} mb={16}>
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
  </Flex>
)

export default SignUp
