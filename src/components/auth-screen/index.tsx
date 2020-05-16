import React from 'react'
import { Flex, Box, Image, Heading } from 'rebass/styled-components'

interface Props {
  children: React.ReactElement
  title: string
  image: string
  loading?: boolean
}

function AuthScreen({ children, title, image, loading }: Props): JSX.Element {
  return (
    <Flex bg="lightBlue" flexDirection="column" alignItems="center" height="100vh">
      <Box width={1} pt={20}>
        <Flex flexDirection="column" alignItems="center">
          <Heading color="midnightBlue" textAlign="center" fontWeight="semi" mb={90} fontSize={[26, 32]}>
            {title}
          </Heading>
          <Image src={image} width={310} />
        </Flex>
      </Box>

      <Box flex={1} width={1} pt={20} pb={60} variant="containerForm">
        {children}
      </Box>
    </Flex>
  )
}

export default AuthScreen
