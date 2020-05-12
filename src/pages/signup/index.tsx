import React from 'react'
import { Flex, Box, Image, Heading } from 'rebass/styled-components'

import SignUpForm from '@monts/pages/signup/components/signup-form'

const SignUp: React.FC = () => {
  return (
    <Flex bg="lightBlue" flexDirection="column" alignItems="center" height="100vh">
      <Box width={1} pt={20}>
        <Flex flexDirection="column" alignItems="center">
          <Heading color="midnightBlue" textAlign="center" fontWeight="semi" mb={90} fontSize={[26, 32]}>
            Criar Conta
          </Heading>
          <Image src="/static/images/illustration/office.svg" width={310} />
        </Flex>
      </Box>

      <SignUpForm />
    </Flex>
  )
}
export default SignUp
