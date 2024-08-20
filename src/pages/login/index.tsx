import kakao_login from '@/assets/images/kakao_login.png'
import { EmblaOptionsType } from 'embla-carousel'
import CustomCarousel from '@/pages/login/components/CustomCarousel.tsx'
import { useState } from 'react'

const data = [
  {
    id: 1,
    img: 'src/assets/images/login_img_1.png',
    text: '서울엔 어떤 산이 있을까요?\n' + '난이도별, 콘텐츠별로 둘러봐요',
  },
  {
    id: 2,
    img: 'src/assets/images/login_img_2.png',
    text: '언제 어떤 코스로 갈까요?\n' + '설레는 등산을 준비해요',
  },
  {
    id: 3,
    img: 'src/assets/images/login_img_3.png',
    text: '친구에게 초대장을 보내고\n' + '준비물도 한 곳에서 관리해',
  },
  {
    id: 4,
    img: 'src/assets/images/login_img_4.png',
    text: '지금부터 산너머산 시작 하겠습니다 ~~',
  },
]
const OPTIONS: EmblaOptionsType = { loop: false }

const Login = () => {
  const [number, setNumber] = useState<number | null>(null)
  const Rest_api_key = import.meta.env.VITE_REST_API_KEY
  const Redirect_uri = `${window.location.origin}/auth`
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${Redirect_uri}&response_type=code`
  const handleLogin = () => {
    window.location.href = kakaoURL
  }
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-5 bg-black/60">
      <CustomCarousel data={data} options={OPTIONS} setNumber={setNumber} />
      {number === 4 ? (
        <button onClick={handleLogin}>
          <img src={kakao_login} alt="kakao_login_img" />
        </button>
      ) : (
        <div className="pt-[45px]" />
      )}
    </div>
  )
}

export default Login
