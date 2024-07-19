import { useEffect } from 'react'
import { login } from '@/services/api/authentication'
import { useNavigate } from 'react-router-dom'

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
        localStorage.setItem('token', data.token)
        localStorage.setItem('nickName', data.nickname)
        navigate('/home')
      } catch (error) {
        console.error('Error during sign-in:', error)
      }
    }

    fetchToken()
  }, [code, navigate])
}

export default useLogin
