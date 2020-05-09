import { addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import theme from '../src/theme'
import GlobalStyle from '../src/styles/global'

addDecorator((storyfn) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{storyfn()}</ThemeProvider>
  </>
))
