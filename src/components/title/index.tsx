import React, { FC } from 'react'
import { Text } from 'rebass/styled-components'

const Title: FC = ({ children }) => {
  return (
    <Text fontSize={[32, 48, 64]} fontWeight="heading" color="primary">
      {children}
    </Text>
  )
}

export default Title
