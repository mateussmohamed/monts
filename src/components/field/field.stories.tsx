import React from 'react'
import { Box } from 'rebass/styled-components'

import Field from '.'
export default {
  title: 'Field',
  component: Field
}

export const Primary = (): JSX.Element => (
  <Box p={4}>
    <Field id="primary" label="Primary" />
  </Box>
)

export const Error = (): JSX.Element => (
  <Box p={4}>
    <Field id="error" label="Error" status="error" message="error field" />
  </Box>
)

export const Info = (): JSX.Element => (
  <Box p={4}>
    <Field id="info" label="Info" message="It's a message" />
  </Box>
)

export const Disabled = (): JSX.Element => (
  <Box p={4}>
    <Field id="disabled" label="Disabled" defaultValue="disabled value" disabled />
  </Box>
)
