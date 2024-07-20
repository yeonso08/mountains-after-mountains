import useLogin from '@/hooks/useLogin.ts'

const KakaoRedirect = () => {
  const code = new URL(window.location.href).searchParams.get('code')
  useLogin(code)

  return (
    <div>
      <h1>로그인 중입니다...</h1>
    </div>
  )
}

export default KakaoRedirect
