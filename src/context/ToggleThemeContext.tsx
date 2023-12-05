import { createContext, useState, ReactNode, useEffect } from 'react'

interface ThemeChangerContextData {
  theme: string
  handleChangeTheme: () => void
}

interface MyThemeProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext({} as ThemeChangerContextData)

export function MyThemeProvider({ children }: MyThemeProviderProps) {
  const getTheme = (): string => {
    const selectedTheme = localStorage.getItem('theme')
    return selectedTheme || 'dark'
  }

  const [theme, setTheme] = useState<string>(getTheme())

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const handleChangeTheme = (): void => {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'))
    console.log('Mudou tema')
  }

  return (
    <ThemeContext.Provider value={{ handleChangeTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}
