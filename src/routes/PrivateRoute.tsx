import React from 'react'
import useAuthStore from '@/store/useAuthStore.ts'

interface ProtectedRouteProps {
  children: React.ReactNode
}
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthenticated = localStorage.getItem('token')
  const isLoggedIn = useAuthStore(state => state.isLoggedIn)

  if (!isAuthenticated) {
    return true
  }

  return children
}

export default ProtectedRoute
