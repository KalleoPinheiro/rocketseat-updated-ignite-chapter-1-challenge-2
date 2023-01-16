import { ThemeProvider } from 'styled-components'
import { Router } from './core/router'

import { DefaultTheme, GlobalStyles } from './styles'

export const App = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  )
}
