import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*::-webkit-scrollbar {
  width: 5px;
}

*::-webkit-scrollbar-track {
  background: #353535;
  border-radius: 10px;
}

*::-webkit-scrollbar-thumb {
  background: ${(props) => props.theme.colors['purple-100']};
  border-radius: 10px;
}

:focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors['purple-300']}
}

body{
    background: ${(props) => props.theme.colors['gray-900']};
    color: ${(props) => props.theme.colors['gray-100']};
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button, h1, h2, h3, h4, h5, h6{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}

@media screen and (max-width: 750px){
    body, input, textarea, button, h1, h2, h3, h4, h5, h6, small{
        font-size: 85%;
    }
}

@media screen and (min-width: 751px) and (max-width: 1024px){
    body, input, textarea, button, h1, h2, h3, h4, h5, h6, small{
        font-size: 90%;
    }
}
`
