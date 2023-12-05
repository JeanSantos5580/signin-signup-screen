import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useContext,
} from 'react'

import { ThemeProvider as ThemeProviderStyledComponents } from 'styled-components'
import { themes } from '../styles/themes'

interface ThemeChangerContextData {
  theme: 'dark' | 'light'
  handleChangeTheme: () => void
}

interface MyThemeProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext({} as ThemeChangerContextData)

export function ThemeProvider({ children }: MyThemeProviderProps) {
  const getTheme = (): 'dark' | 'light' => {
    const selectedTheme = localStorage.getItem('theme') as 'dark' | 'light'
    return selectedTheme || 'dark'
  }

  const [theme, setTheme] = useState<'dark' | 'light'>(getTheme())

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const handleChangeTheme = (): void => {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ handleChangeTheme, theme }}>
      <ThemeProviderStyledComponents theme={themes[theme]}>
        {children}
      </ThemeProviderStyledComponents>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
