import { GlobalStyle } from './styles/global'
import { Router } from './Routes'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ToggleThemeContext'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
