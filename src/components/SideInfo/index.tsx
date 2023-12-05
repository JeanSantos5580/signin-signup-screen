import { useLocation } from 'react-router-dom'
import { BoxSideInfo, Link, Subtitle, Title } from './styles'

export function SideInfo() {
  const location = useLocation()
  const path = location.pathname

  const titleText = path === '/' ? 'Sign in to' : 'Sign up to'

  const subtitleText =
    path === '/'
      ? 'our development universe 🚀💫'
      : 'our fantastic community! 🧑‍💻'

  const message =
    path === '/'
      ? "If you don't have an account register"
      : 'If you already have an account'

  return (
    <BoxSideInfo>
      <Title>{titleText}</Title>
      <Subtitle>{subtitleText}</Subtitle>
      <small>{message}</small>
      <small>
        You can&ensp;
        {path === '/' ? (
          <Link to="/signup">Register here!</Link>
        ) : (
          <Link to="/">Login here!</Link>
        )}
      </small>
    </BoxSideInfo>
  )
}
