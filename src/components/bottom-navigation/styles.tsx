import { Flex } from 'rebass/styled-components'

type BottomNavigationItemProps = {
  children: React.ReactNode
}

export const BottomNavigationItem = ({ children }: BottomNavigationItemProps) => (
  <Flex
    as="button"
    mx={2}
    px={4}
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    sx={{
      border: 0,
      outline: 0,
      cursor: 'pointer'
    }}
  >
    {children}
  </Flex>
)
