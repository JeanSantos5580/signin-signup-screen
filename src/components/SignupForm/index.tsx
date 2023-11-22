import {
  BoxSignupForm,
  FormSignup,
  ContainerEmailOptions,
  Button,
  Input,
} from './styles'
import appleLogo from '../../assets/apple-logo.svg'
import facebookLogo from '../../assets/facebook-logo.svg'
import googleLogo from '../../assets/google-logo.svg'

export function SignupForm() {
  return (
    <BoxSignupForm>
      <h3>Sign up</h3>
      <FormSignup>
        <Input type="email" placeholder="Enter email" name="" />
        <Input type="password" placeholder="Create User name" name="" />
        <Input type="password" placeholder="Contact number" name="" />
        <Input type="password" placeholder="Password" name="" />
        <Input type="password" placeholder="Confirm password" name="" />
        <Button>Register</Button>
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
