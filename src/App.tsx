import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Signin } from './components/Signin'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Signin />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
