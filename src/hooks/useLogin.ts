import { useEffect } from 'react'
import { login } from '@/services/api/authentication'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '@/store/useAuthStore'

const useLogin = (code: string | null) => {
  const navigate = useNavigate()
  const { login: setLogin } = useAuthStore()

  useEffect(() => {
    const fetchToken = async () => {
      if (!code) {
        console.error('No code provided')
        return
      }

      try {
        const scheduleId = localStorage.getItem('scheduleId')
        const data = await login(code, scheduleId || '')
        setLogin(data.token, data.nickname, data.kakaoRefreshToken)
        navigate('/welcome')
      } catch (error) {
        console.error('Error during sign-in:', error)
        navigate('/')
      }
    }

    fetchToken()
  }, [code, navigate, setLogin])
}

export default useLogin
