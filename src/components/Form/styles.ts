import styled from 'styled-components'

const Box = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  small {
    margin: 0 auto;
    color: ${(props) => props.theme.colors['gray-300']};
  }
`

export const BoxSigninForm = styled(Box)`
  @media screen and (max-width: 750px) {
    margin-bottom: 2rem;
  }
`

export const BoxSignupForm = styled(Box)`
  margin-bottom: 2rem;
`

export const FormTitle = styled.h3`
  font-size: 1.875rem;
  font-weight: 500;
  margin-bottom: 1.75rem;

  @media screen and (max-width: 750px) {
    display: none;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input + input {
    margin-top: 30px;
  }
`

export const FormSignin = styled(Form)`
  a {
    color: ${(props) => props.theme.colors['gray-300']};
    font-size: 0.8333rem;
    text-decoration: none;
    width: fit-content;
    margin-top: 1.0625rem;
    margin-bottom: 2.875rem;
    margin-left: auto;
    &:hover {
      color: ${(props) => props.theme.colors['purple-300']};
    }

    @media screen and (max-width: 750px) {
      font-size: 0.75rem;
    }
  }
`
export const FormSignup = styled(Form)``

export const Input = styled.input`
  padding: 0.875rem 1.625rem;
  border-radius: 0.5rem;
  border: none;
  color: ${(props) => props.theme.colors['purple-500']};
  background: ${(props) => props.theme.inputBackgroundColor};

  &::placeholder {
    color: ${(props) => props.theme.colors['purple-500']};
  }
`

export const Button = styled.button`
  height: 48px;
  color: ${(props) => props.theme.colors['gray-100']};
  border: none;
  background: ${(props) => props.theme.colors['purple-500']};
  border-radius: 0.5rem;
  margin-bottom: 3.375rem;
  cursor: pointer;
`

export const ButtonSignup = styled(Button)`
  margin-top: 1.75rem;
  margin-bottom: 3.375rem;
`

export const ContainerEmailOptions = styled.footer`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2.8125rem;

  button {
    background: transparent;
    border: none;
    line-height: 0;
    cursor: pointer;
  }

  img {
    width: 1.875rem;
  }
`
