import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { Router } from './Routes'
import { BrowserRouter } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { themes } from './styles/themes'

function App() {
  const getTheme = () => {
    const selectedTheme = localStorage.getItem('theme')
    return selectedTheme || 'dark'
  }
  const [theme, setTheme] = useState(getTheme())

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const handleChangeTheme = () => {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      <BrowserRouter>
        <Router handleChangeTheme={handleChangeTheme} />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
