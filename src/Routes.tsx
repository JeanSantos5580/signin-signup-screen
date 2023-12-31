import { Route, Routes } from 'react-router-dom'
import { Signin } from './components/Signin'
import { Signup } from './components/Signup'
import { DefaultLayout } from './layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    element: <Signin />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
]

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  )
}
