import React from 'react'
import { Flex, Text } from 'rebass/styled-components'
import { Plus as PlusIcon, Box as BoxIcon, Minimize2 as MinimizeIcon } from 'react-feather'

type BottomNavigationText = {
  children: React.ReactNode
}

const BottomNavigationText: React.FC<BottomNavigationText> = ({ children }) => (
  <Text fontSize={12} lineHeight="24px" mt={1} fontWeight="light" color="#78839C">
    {children}
  </Text>
)

type BottomNavigationItem = {
  children: React.ReactNode
}

const BottomNavigationItem: React.FC<BottomNavigationItem> = ({ children }) => (
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

function BottomNavigation(): JSX.Element {
  return (
    <Flex
      flex={1}
      justifyContent="center"
      alignItems="stretch"
      bg="lightBlue"
      height={80}
      maxWidth={380}
      mx="auto"
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
    >
      <BottomNavigationItem>
        <MinimizeIcon width={24} height={24} color="#B5BBC9" />
        <BottomNavigationText>Transactions</BottomNavigationText>
      </BottomNavigationItem>

      <BottomNavigationItem>
        <Flex
          width={58}
          height={58}
          bg="primary"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          mt="-34px"
          sx={{ borderRadius: '100px' }}
        >
          <PlusIcon width={24} height={24} color="#FFFFFF" />
        </Flex>
        <BottomNavigationText>Deposit</BottomNavigationText>
      </BottomNavigationItem>

      <BottomNavigationItem>
        <BoxIcon width={24} height={24} color="#B5BBC9" />
        <BottomNavigationText>Portfolio</BottomNavigationText>
      </BottomNavigationItem>
    </Flex>
  )
}

export default BottomNavigation
