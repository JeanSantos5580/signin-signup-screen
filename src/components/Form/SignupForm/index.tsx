import {
  BoxSignupForm,
  FormSignup,
  ContainerEmailOptions,
  Input,
  FormTitle,
  ButtonSignup,
  PasswordInputContainer,
} from '../styles'
import appleLogo from '../../../assets/apple-logo.svg'
import facebookLogo from '../../../assets/facebook-logo.svg'
import googleLogo from '../../../assets/google-logo.svg'
import { Eye, EyeClosed } from '@phosphor-icons/react'
import { useState } from 'react'

export function SignupForm() {
  const [passwordVisibility, setPasswordVisibility] = useState('password')

  const handlePasswordVisibility = () => {
    setPasswordVisibility((prevState) =>
      prevState === 'password' ? 'text' : 'password',
    )
  }
  return (
    <BoxSignupForm>
      <FormTitle>Sign up</FormTitle>
      <FormSignup>
        <Input type="email" placeholder="Enter email" name="" />
        <Input type="text" placeholder="Create User name" name="" />
        <Input type="number" placeholder="Contact number" name="" />
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
        <Input type="password" placeholder="Confirm password" name="" />
        <ButtonSignup>Register</ButtonSignup>
      </FormSignup>
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
    </BoxSignupForm>
  )
}
