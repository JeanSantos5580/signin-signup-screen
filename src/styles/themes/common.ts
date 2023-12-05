export interface Theme {
  colors: {
    white: string
    'gray-100': string
    'gray-300': string
    'gray-400': string
    'gray-500': string
    'gray-600': string
    'gray-700': string
    'gray-800': string
    'gray-900': string
    'green-300': string
    'green-500': string
    'green-700': string
    'red-500': string
    'red-700': string
    'yellow-500': string
    'purple-100': string
    'purple-300': string
    'purple-500': string
  }
  spacing: {
    small: number
    medium: number
    large: number
  }
  borderRadius: string
}

const commonStyles: Theme = {
  colors: {
    white: '#fff',
    'gray-100': '#e1e1e6',
    'gray-300': '#c4c4cc',
    'gray-400': '#8d8d99',
    'gray-500': '#7c7c8a',
    'gray-600': '#323238',
    'gray-700': '#29292e',
    'gray-800': '#202024',
    'gray-900': '#121214',
    'green-300': '#00b37e',
    'green-500': '#00875f',
    'green-700': '#015f43',
    'red-500': '#ab222e',
    'red-700': '#7a1921',
    'yellow-500': '#fba94c',
    'purple-100': '#F0EFFF',
    'purple-300': '#A7A3FF',
    'purple-500': '#4D47C3',
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
  },
  borderRadius: '8px',
}

export default commonStyles
