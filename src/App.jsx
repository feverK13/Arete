import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { ProtectedRoute } from './components/auth/ProtectedRoute'
import Layout from './components/layout/Layout'
import { useAuth } from './context/AuthContext'
import AboutUsPage from './pages/AboutUsPage'
import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ShopPage from './pages/ShopPage'
import { setUser } from './store/userSlice'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/shop',
        element: (
          <ProtectedRoute>
            <ShopPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/about-us',
        element: <AboutUsPage />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export default function App() {
  const dispatch = useDispatch()
  const { user, isLoggedIn } = useAuth()

  useEffect(() => {
    if (isLoggedIn && user) {
      dispatch(setUser(user))
    }
  }, [isLoggedIn, user, dispatch])

  return <RouterProvider router={router} />
}
