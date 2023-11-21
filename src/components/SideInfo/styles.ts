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
`

export const Subtitle = styled.h3`
  font-size: 2.1875rem;
  font-weight: 500;
  margin-bottom: 3.3125rem;
`

export const Link = styled.a`
  font-weight: bold;
  color: ${(props) => props.theme.colors['purple-500']};
`
