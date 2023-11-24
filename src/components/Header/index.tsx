import { NavLink } from 'react-router-dom'
import { HeaderContainer, NavigationButtonsContainer } from './styles'
import brandmarkLogo from '../../assets/codeflow-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={brandmarkLogo} alt="" width={100} />
      <NavigationButtonsContainer>
        <NavLink to="/">Signin</NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </NavigationButtonsContainer>
    </HeaderContainer>
  )
}
