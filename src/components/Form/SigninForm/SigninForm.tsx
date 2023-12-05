import {
  BoxSigninForm,
  FormSignin,
  ContainerEmailOptions,
  Button,
  Input,
  FormTitle,
  PasswordInputContainer,
} from '../styles'
import appleLogo from '../../../assets/apple-logo.svg'
import facebookLogo from '../../../assets/facebook-logo.svg'
import googleLogo from '../../../assets/google-logo.svg'
import { Eye, EyeClosed } from '@phosphor-icons/react'
import { useState } from 'react'

export function SigninForm() {
  const [passwordVisibility, setPasswordVisibility] = useState('password')

  const handlePasswordVisibility = () => {
    setPasswordVisibility((prevState) =>
      prevState === 'password' ? 'text' : 'password',
    )
  }
  return (
    <BoxSigninForm>
      <FormTitle>Sign in</FormTitle>
      <FormSignin>
        <Input type="email" placeholder="Enter email" name="" />
        <PasswordInputContainer>
          <Input
            type={passwordVisibility}
            placeholder="Password"
            name=""
            id="passwordInput"
          />
          {passwordVisibility === 'password' ? (
            <Eye size={24} onClick={handlePasswordVisibility} />
          ) : (
            <EyeClosed size={24} onClick={handlePasswordVisibility} />
          )}
        </PasswordInputContainer>
        <a href="">Forgot password?</a>
        <Button>Login</Button>
      </FormSignin>
      <small>or continue with</small>
      <ContainerEmailOptions>
        <button title="Facebook account">
          <img src={facebookLogo} alt="" />
        </button>
        <button title="Apple account">
          <img src={appleLogo} alt="" />
        </button>
        <button title="Google account">
          <img src={googleLogo} alt="" />
        </button>
      </ContainerEmailOptions>
    </BoxSigninForm>
  )
}
