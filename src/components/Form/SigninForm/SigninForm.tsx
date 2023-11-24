import {
  BoxSigninForm,
  FormSignin,
  ContainerEmailOptions,
  Button,
  Input,
  FormTitle,
} from '../styles'
import appleLogo from '../../../assets/apple-logo.svg'
import facebookLogo from '../../../assets/facebook-logo.svg'
import googleLogo from '../../../assets/google-logo.svg'

export function SigninForm() {
  return (
    <BoxSigninForm>
      <FormTitle>Sign in</FormTitle>
      <FormSignin>
        <Input type="email" placeholder="Enter email" name="" />
        <Input type="password" placeholder="Password" name="" />
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
