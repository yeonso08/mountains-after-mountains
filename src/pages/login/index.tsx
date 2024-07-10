import kakao_login from '@/assets/images/kakao_login.png'

const Login = () => {
  const Rest_api_key = import.meta.env.VITE_REST_API_KEY
  const Redirect_uri = `${window.location.origin}/auth`
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${Redirect_uri}&response_type=code`
  const handleLogin = () => {
    window.location.href = kakaoURL
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <button onClick={handleLogin}>
          <img src={kakao_login} alt="kakao_login_img" />
        </button>
      </div>
    </div>
  )
}

export default Login
