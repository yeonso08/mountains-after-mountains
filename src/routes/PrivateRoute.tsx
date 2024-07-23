import React from 'react'

interface ProtectedRouteProps {
  children: React.ReactNode
}
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthenticated = localStorage.getItem('token')

  if (!isAuthenticated) {
    return true
  }

  return children
}

export default ProtectedRoute
