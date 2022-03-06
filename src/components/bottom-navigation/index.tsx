import React from 'react'
import { Flex, Text } from 'rebass/styled-components'
import { Plus as PlusIcon, Box as BoxIcon, Minimize2 as MinimizeIcon } from 'react-feather'

import { BottomNavigationItem } from './styles'

function BottomNavigation() {
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
        <Text fontSize={12} lineHeight="24px" mt={1} fontWeight="light" color="#78839C">
          Transactions
        </Text>
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
          <PlusIcon width={24} height={24} color="#B5BBC9" />
        </Flex>
        <Text fontSize={12} lineHeight="24px" mt={1} fontWeight="light" color="#78839C">
          Deposit
        </Text>
      </BottomNavigationItem>

      <BottomNavigationItem>
        <BoxIcon width={24} height={24} color="#B5BBC9" />
        <Text fontSize={12} lineHeight="24px" mt={1} fontWeight="light" color="#78839C">
          Portfolio
        </Text>
      </BottomNavigationItem>
    </Flex>
  )
}

export default BottomNavigation
