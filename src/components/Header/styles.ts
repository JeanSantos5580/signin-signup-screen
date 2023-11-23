import styled from 'styled-components'

export const HeaderContainer = styled.div`
  padding: 1.25rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavigationButtonsContainer = styled.div`
  display: flex;

  a {
    font-weight: bold;
    color: ${(props) => props.theme.colors['purple-500']};
    font-weight: bold;
    text-decoration: none;
    padding: 4px 8px;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;

    &:visited {
      color: ${(props) => props.theme.colors['purple-500']};
    }

    &:hover {
      border-bottom: 2px solid ${(props) => props.theme.colors['purple-500']};
    }
  }
`
