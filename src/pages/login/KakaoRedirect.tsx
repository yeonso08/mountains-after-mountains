import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const KakaoRedirect = () => {
  const navigate = useNavigate()
  const code = new URL(window.location.href).searchParams.get('code')
  console.log(code)
  const headers = {
    'Content-Type': 'application/json',
  }

  useEffect(() => {
    if (code) {
      fetch(`${import.meta.env.VITE_APP_API_URL}/kakao/getToken?code=${code}`, {
        method: 'GET',
        headers: headers,
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          if (data.result && data.result.user_id && data.result.jwt) {
            console.log(data.result.user_id)
            console.log(data.result.jwt)
            navigate('/')
          } else {
            console.error('Invalid response structure:', data)
          }
        })
        .catch(error => {
          console.error('오류 발생', error)
        })
    } else {
      console.error('Code parameter is missing in the URL')
    }
  }, [code, navigate])

  return (
    <div>
      <h1>로그인 중입니다.</h1>
    </div>
  )
}

export default KakaoRedirect
