import commonStyles, { Theme } from './common'

interface LightTheme extends Theme {
  background: string
  color: string
  inputBackgroundColor: string
}
export const light: LightTheme = {
  ...commonStyles,
  background: commonStyles.colors.white,
  inputBackgroundColor: commonStyles.colors['purple-100'],
  color: commonStyles.colors['gray-900'],
}
