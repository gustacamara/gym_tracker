import { createBrowserRouter } from "react-router-dom"
import { AuthLayout } from "./pages/_layouts/auth"
import { SignIn } from "./pages/auth/sign-in"
import { SignUp } from "./pages/auth/sign-up"
import { AppLayout } from "./pages/_layouts/app"
import { Dasboard } from "./pages/app/dashboard"

export const router = createBrowserRouter([

  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Dasboard /> }
    ]
  },
  {
    path: '/',
    element: <AuthLayout/>,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> }
    ]
  }
])