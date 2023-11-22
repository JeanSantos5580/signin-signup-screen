import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src="" alt="" />
      <NavLink to="/">Signin</NavLink>
      <NavLink to="/signup">Signup</NavLink>
    </HeaderContainer>
  )
}
