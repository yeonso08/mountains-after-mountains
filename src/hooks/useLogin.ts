import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '@/services/api/authentication'

const useLogin = (code: string | null) => {
  const navigate = useNavigate()

  useEffect(() => {
    const fetchToken = async () => {
      if (!code) {
        console.error('No code provided')
        return
      }

      try {
        const data = await login(code)
        console.log('Token data:', data)
        navigate('/')
      } catch (error) {
        console.error('Error during sign-in:', error)
      }
    }

    fetchToken()
  }, [code, navigate])
}

export default useLogin
