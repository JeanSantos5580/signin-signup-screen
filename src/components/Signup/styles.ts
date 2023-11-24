import styled from 'styled-components'

export const BoxSignup = styled.main`
  display: flex;
  margin: 0 10.9375rem;
  gap: 5.5rem;

  @media screen and (min-width: 750px) and (max-width: 1024px) {
    margin: 0 100px;
  }

  @media screen and (min-width: 600px) and (max-width: 750px) {
    margin: 0 150px;
    flex-direction: column;
  }

  @media screen and (max-width: 600px) {
    margin: 0 60px;
    flex-direction: column;
  }
`
