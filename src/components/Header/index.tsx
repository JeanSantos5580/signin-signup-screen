import { NavLink } from 'react-router-dom'
import { HeaderContainer, NavigationButtonsContainer } from './styles'
import brandmarkLogo from '../../assets/codeflow-logo.svg'
import { ToggleButton } from '../ToggleButton'

export function Header() {
  return (
    <HeaderContainer>
      <img src={brandmarkLogo} alt="" width={80} />
      <NavigationButtonsContainer>
        <div>
          <NavLink to="/">Signin</NavLink>
          <NavLink to="/signup">Signup</NavLink>
        </div>
        <ToggleButton />
      </NavigationButtonsContainer>
    </HeaderContainer>
  )
}
