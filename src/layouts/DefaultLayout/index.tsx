import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { DefaultLayoutContainer } from './styles'

export function DefaultLayout({ handleChangeTheme }) {
  return (
    <DefaultLayoutContainer>
      <Header handleChangeTheme={handleChangeTheme} />
      <Outlet />
    </DefaultLayoutContainer>
  )
}
