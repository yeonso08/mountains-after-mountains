import create from 'zustand'

interface AuthState {
  isLoggedIn: boolean
  logout: () => void
}

const useAuthStore = create<AuthState>(set => ({
  isLoggedIn: false,
  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('nickName')
  },
}))

export default useAuthStore
