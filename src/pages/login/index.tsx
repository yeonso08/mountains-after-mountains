const Login = () => {
  const Rest_api_key = import.meta.env.VITE_REST_API_KEY //REST API KEY
  const Redirect_uri = 'http://localhost:5173/auth' //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${Redirect_uri}&response_type=code`
  const handleLogin = () => {
    window.location.href = kakaoURL
  }
  return (
    <>
      <button onClick={handleLogin}>카카오 로그인</button>
    </>
  )
}

export default Login
