import React from 'react'
import Link from 'next/link'
import { Flex, Box, Image, Text, Heading } from 'rebass/styled-components'

import Field from '@monts/components/field'
import Button from '@monts/components/button'

const Login: React.FC = () => (
  <Flex bg="lightBlue" flexDirection="column" alignItems="center" height="100vh">
    <Box width={1} pt={20}>
      <Flex flexDirection="column" alignItems="center">
        <Heading color="midnightBlue" textAlign="center" fontWeight="semi" mb={90} fontSize={[26, 32]}>
          Bem vindo novamente
        </Heading>
        <Image src="/static/images/illustration/login.svg" width={310} />
      </Flex>
    </Box>

    <Box flex={1} width={1} pt={20} pb={60} variant="containerForm">
      <Flex flexDirection="column" alignItems="center">
        <Field label="Email" type="email" />
        <Field label="Senha" type="password" />

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
    </Box>
  </Flex>
)

export default Login
