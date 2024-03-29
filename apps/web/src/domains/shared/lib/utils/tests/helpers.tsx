import { render, RenderResult } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from 'ui/styles/theme'

export function renderWithTheme(children: React.ReactNode): RenderResult {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
}
