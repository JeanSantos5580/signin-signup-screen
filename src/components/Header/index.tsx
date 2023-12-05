import { NavLink } from 'react-router-dom'
import { HeaderContainer, NavigationButtonsContainer } from './styles'
import brandmarkLogo from '../../assets/codeflow-logo.svg'
import { ToggleButton } from '../ToggleButton'

export function Header({ handleChangeTheme }) {
  return (
    <HeaderContainer>
      <img src={brandmarkLogo} alt="" width={100} />
      <NavigationButtonsContainer>
        <div>
          <NavLink to="/">Signin</NavLink>
          <NavLink to="/signup">Signup</NavLink>
        </div>
        {/* <button onClick={handleChangeTheme}>Change theme</button> */}
        <ToggleButton handleChangeTheme={handleChangeTheme} />
      </NavigationButtonsContainer>
    </HeaderContainer>
  )
}
