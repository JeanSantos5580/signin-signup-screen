import { SideInfo } from '../SideInfo'
import { SigninForm } from '../Form/SigninForm/SigninForm'
import { BoxSignin } from './styles'

export function Signin() {
  return (
    <BoxSignin>
      <SideInfo />
      <SigninForm />
    </BoxSignin>
  )
}
