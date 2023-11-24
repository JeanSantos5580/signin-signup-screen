import { SideInfo } from '../SideInfo'
import { SignupForm } from '../Form/SignupForm'
import { BoxSignup } from './styles'

export function Signup() {
  return (
    <BoxSignup>
      <SideInfo />
      <SignupForm />
    </BoxSignup>
  )
}
