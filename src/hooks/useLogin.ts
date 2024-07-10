import { useEffect } from 'react'
import { login } from '@/services/api/authentication'
import useAuthStore from '@/store/useAuthStore.ts'
import { useNavigate } from 'react-router-dom'

const useLogin = (code: string | null) => {
  const navigate = useNavigate()
  const setLogin = useAuthStore(state => state.login)

  useEffect(() => {
    const fetchToken = async () => {
      if (!code) {
        console.error('No code provided')
        return
      }

      try {
        const data = await login(code)
        console.log('Token data:', data)
        setLogin()
      } catch (error) {
        console.error('Error during sign-in:', error)
      } finally {
        navigate('/home')
        setLogin()
      }
    }

    fetchToken()
  }, [code, setLogin])
}

export default useLogin
