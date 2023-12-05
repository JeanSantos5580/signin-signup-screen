import { keyframes } from "styled-components"

const toggle = keyframes`
  from{
    transform: translateX(5px);
  }

  to{
    transform: translateX(17px);
  }
  `

export default {
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
