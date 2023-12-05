import commonStyles, { Theme } from './common'

interface DarkTheme extends Theme {
  background: string
  color: string
}
export const dark: DarkTheme = {
  ...commonStyles,
  background: commonStyles.colors['gray-800'],
  color: commonStyles.colors['gray-100'],
}
