import React from 'react'
import { Box } from 'rebass/styled-components'

import Button from '.'
export default {
  title: 'Button',
  component: Button
}

export const Primary = (): JSX.Element => (
  <Box p={4}>
    <Button>Let&apos;s Get Started</Button>
  </Box>
)

export const Ghost = (): JSX.Element => (
  <Box p={4}>
    <Button variant="ghost">Spoooooky</Button>
  </Box>
)

export const PrimaryWhite = (): JSX.Element => (
  <Box p={4} bg="lightBlue">
    <Button variant="white">Night Time</Button>
  </Box>
)

export const Positive = (): JSX.Element => (
  <Box p={4}>
    <Button variant="positive">Smile :)</Button>
  </Box>
)

export const Negative = (): JSX.Element => (
  <Box p={4}>
    <Button variant="negative">Frown :(</Button>
  </Box>
)

export const Loading = (): JSX.Element => (
  <Box p={4}>
    <Button mr={3} loading>
      Let&apos;s Get Started
    </Button>

    <Button mr={3} variant="ghost" loading>
      Spoooooky
    </Button>

    <Button mr={3} variant="positive" loading>
      Smile :)
    </Button>
  </Box>
)
