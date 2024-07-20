import { useEffect } from 'react'
import { login } from '@/services/api/authentication'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '@/store/useAuthStore.ts'

const useLogin = (code: string | null) => {
  const navigate = useNavigate()
  const setIsLoggedIn = useAuthStore(state => state.setIsLoggedIn)

  useEffect(() => {
    const fetchToken = async () => {
      if (!code) {
        console.error('No code provided')
        return
      }

      try {
        const data = await login(code)
        localStorage.setItem('token', data.token)
        localStorage.setItem('nickName', data.nickname)
        setIsLoggedIn(true)
        navigate('/home')
      } catch (error) {
        console.error('Error during sign-in:', error)
      }
    }

    fetchToken()
  }, [code, navigate, setIsLoggedIn])
}

export default useLogin
