import { SideInfoSignin } from '../SideInfoSignin'
import { SigninForm } from '../SigninForm/SigninForm'
import { BoxSignin } from './styles'

export function Signin() {
  return (
    <BoxSignin>
      <SideInfoSignin />
      <SigninForm />
    </BoxSignin>
  )
}
