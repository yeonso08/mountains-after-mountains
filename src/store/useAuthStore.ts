import create from 'zustand'

interface AuthState {
  isLoggedIn: boolean
  setIsLoggedIn: (value: boolean) => void
  logout: () => void
}

const useAuthStore = create<AuthState>(set => ({
  isLoggedIn: false,
  setIsLoggedIn: value => set({ isLoggedIn: value }),
  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('nickName')
    set({ isLoggedIn: false })
  },
}))

export default useAuthStore
