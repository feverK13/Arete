import { createContext, useContext, useEffect, useState } from 'react'

import { createUser, fetchUserByEmail, fetchUserData } from '../store/apiData.js'

const AuthContext = createContext(null)

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem('areteUser')
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser)
        setUser(userData)
        setIsLoggedIn(true)
      } catch (e) {
        console.error('Помилка парсингу user data')
        localStorage.removeItem('areteUser')
      }
    }
    setLoading(false)
  }, [])

  const register = async userData => {
    try {
      const newUser = await createUser(userData)
      localStorage.setItem('areteUser', JSON.stringify(newUser))
      setUser(newUser)
      setIsLoggedIn(true)
    } catch (error) {
      throw error
    }
  }

  const login = async ({ email, password }) => {
    try {
      const userData = await fetchUserByEmail(email)
      if (!userData) {
        throw new Error('Користувача з таким email не знайдено')
      }
      if (userData.password !== password) {
        throw new Error('Невірний пароль')
      }
      localStorage.setItem('areteUser', JSON.stringify(userData))
      setUser(userData)
      setIsLoggedIn(true)
    } catch (error) {
      throw error
    }
  }

  const logout = () => {
    localStorage.removeItem('areteUser')
    setUser(null)
    setIsLoggedIn(false)
  }

  const value = {
    user,
    isLoggedIn,
    loading,
    register,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth має використовуватись всередині AuthProvider')
  }

  return context
}
