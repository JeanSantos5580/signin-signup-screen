import {
  BoxSignupForm,
  FormSignup,
  ContainerEmailOptions,
  Input,
  FormTitle,
  ButtonSignup,
} from '../styles'
import appleLogo from '../../../assets/apple-logo.svg'
import facebookLogo from '../../../assets/facebook-logo.svg'
import googleLogo from '../../../assets/google-logo.svg'

export function SignupForm() {
  return (
    <BoxSignupForm>
      <FormTitle>Sign up</FormTitle>
      <FormSignup>
        <Input type="email" placeholder="Enter email" name="" />
        <Input type="password" placeholder="Create User name" name="" />
        <Input type="password" placeholder="Contact number" name="" />
        <Input type="password" placeholder="Password" name="" />
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
