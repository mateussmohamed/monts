import { Box, Flex, Heading, Image } from 'rebass/styled-components'

type AuthScreenProps = {
  children: React.ReactNode
  title: string
  image: string
  loading?: boolean
}

export const AuthScreen = ({ children, title, image }: AuthScreenProps) => {
  return (
    <Box bg="lightBlue" height="100vh">
      <Box width={1} maxWidth={512} mx="auto" pt={20}>
        <Flex flexDirection="column" alignItems="center">
          <Heading color="midnightBlue" textAlign="center" fontWeight="semi" mb={90} fontSize={[26, 32]}>
            {title}
          </Heading>
          <Image src={image} width={310} alt="login image" />
        </Flex>

        <Box flex={1} width={1} pt={20} pb={60} variant="containerForm">
          {children}
        </Box>
      </Box>
    </Box>
  )
}
