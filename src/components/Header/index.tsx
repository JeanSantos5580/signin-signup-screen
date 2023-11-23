import { NavLink } from 'react-router-dom'
import { HeaderContainer, NavigationButtonsContainer } from './styles'
import brandmarkLogo from '../../assets/ukode-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={brandmarkLogo} alt="" width={60} />
      <NavigationButtonsContainer>
        <NavLink to="/">Signin</NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </NavigationButtonsContainer>
    </HeaderContainer>
  )
}
