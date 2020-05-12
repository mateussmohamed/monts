import React from 'react'
import Link from 'next/link'
import { Flex, Box, Image, Text, Heading } from 'rebass/styled-components'

import Button from '@monts/components/button'

const Welcome: React.FC = () => (
  <Flex
    bg="primary"
    flexDirection="column"
    justifyContent="space-between"
    alignItems="center"
    flex={1}
    pt={50}
    pb={50}
    height="100vh"
  >
    <Box>
      <Flex flexDirection="column" alignItems="center">
        <Image src="/static/images/logo.svg" width={120} mb={30} />
        <Text color="white" textAlign="center" fontWeight="normal" opacity={0.5} fontSize={[18, 24]}>
          Bem vindo a
        </Text>
        <Heading color="white" textAlign="center" fontWeight="light" fontSize={[48, 64]}>
          MONTS
        </Heading>
      </Flex>
    </Box>

    <Box>
      <Flex flexDirection="column" alignItems="center">
        <Link href="/signup" passHref>
          <Button variant="white" minWidth={200} mb={16}>
            Criar Conta
          </Button>
        </Link>

        <Text as="p" color="white" textAlign="center" fontWeight="normal" fontSize={[16, 18]}>
          Já possui uma conta?{' '}
          <Link href="/login" passHref>
            <Text as="a" color="white" fontWeight="semi" fontSize={[16, 18]}>
              Login
            </Text>
          </Link>
        </Text>
      </Flex>
    </Box>
  </Flex>
)

export default Welcome
