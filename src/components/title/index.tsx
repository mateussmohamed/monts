import React, { FC } from 'react'
import { Text } from 'rebass'

const Title: FC = ({ children }) => {
  return (
    <Text fontSize={[32, 48, 72]} fontWeight="bold" color="primary">
      {children}
    </Text>
  )
}

export default Title
