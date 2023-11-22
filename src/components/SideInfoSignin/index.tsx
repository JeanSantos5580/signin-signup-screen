import { NavLink } from 'react-router-dom'
import { BoxSideInfo, Subtitle, Title } from './styles'

export function SideInfoSignin() {
  return (
    <BoxSideInfo>
      <Title>Sign in to</Title>
      <Subtitle>our development universe 🪐💫</Subtitle>
      <small>If you don&apos;t have an account register</small>
      <small>
        You can <NavLink to="/signup">Register here!</NavLink>
      </small>
    </BoxSideInfo>
  )
}
