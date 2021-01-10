import React from 'react'
import { RouterContext } from 'next/dist/next-server/lib/router-context'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

export const decorators = [
  (Story) => (
    <RouterContext.Provider
      value={{
        push: () => Promise.resolve(),
        replace: () => Promise.resolve(),
        prefetch: () => Promise.resolve()
      }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    </RouterContext.Provider>
  )
]