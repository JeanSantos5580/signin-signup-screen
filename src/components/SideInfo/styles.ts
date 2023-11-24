import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const BoxSideInfo = styled.section`
  height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`
export const Title = styled.h1`
  font-size: 3.125rem;
  font-weight: 600;

  @media screen and (min-width: 750px) and (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 750px) {
    font-size: 1.625rem;
  }
`

export const Subtitle = styled.h3`
  font-size: 2.1875rem;
  font-weight: 500;
  margin-bottom: 3.3125rem;

  @media screen and (min-width: 750px) and (max-width: 1024px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 750px) {
    font-size: 1.3125rem;
    margin-bottom: 2rem;
  }
`

export const Link = styled(NavLink)`
  font-weight: bold;
  color: ${(props) => props.theme.colors['purple-500']};
  font-weight: bold;
  text-decoration: none;

  &:visited {
    color: ${(props) => props.theme.colors['purple-500']};
  }
`
