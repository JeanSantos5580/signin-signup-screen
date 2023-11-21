import { BoxSideInfo, Link, Subtitle, Title } from './styles'

export function SideInfo() {
  return (
    <BoxSideInfo>
      <Title>Sign in to</Title>
      <Subtitle>our development universe 🪐💫</Subtitle>
      <small>If you don&apos;t have an account register</small>
      <small>
        You can <Link href="">Register here!</Link>
      </small>
    </BoxSideInfo>
  )
}
