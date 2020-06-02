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
    <Box bg="lightBlue" height="100vh">
      <Box width={1} maxWidth={512} mx="auto" pt={20}>
        <Flex flexDirection="column" alignItems="center">
          <Heading color="midnightBlue" textAlign="center" fontWeight="semi" mb={90} fontSize={[26, 32]}>
            {title}
          </Heading>
          <Image src={image} width={310} />
        </Flex>

        <Box flex={1} width={1} pt={20} pb={60} variant="containerForm">
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default AuthScreen
