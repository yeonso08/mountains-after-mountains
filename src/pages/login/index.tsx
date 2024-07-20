import kakao_login from '@/assets/images/kakao_login.png'
import { EmblaOptionsType } from 'embla-carousel'
import CustomCarousel from '@/pages/login/components/CustomCarousel.tsx'

const data = [
  {
    id: 1,
    img: 'https://cdn.pixabay.com/photo/2024/04/19/04/39/kingfisher-8705377_1280.jpg',
    text: '서울엔 어떤 산이 있을까요?\n' + '난이도별, 콘텐츠별로 둘러봐요',
  },
  {
    id: 2,
    img: 'https://cdn.pixabay.com/photo/2024/04/19/04/39/kingfisher-8705377_1280.jpg',
    text: '등산 일정을 정했다면?\n' + '초대장 보내고 일정과 준비물 한 곳에서 관리해요',
  },
  {
    id: 3,
    img: 'https://cdn.pixabay.com/photo/2024/04/19/04/39/kingfisher-8705377_1280.jpg',
    text: '지금부터 산너머산 시작 하겠습니다 ~~',
  },
]
const OPTIONS: EmblaOptionsType = { loop: true }

const Login = () => {
  const Rest_api_key = import.meta.env.VITE_REST_API_KEY
  const Redirect_uri = `${window.location.origin}/auth`
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${Redirect_uri}&response_type=code`
  const handleLogin = () => {
    window.location.href = kakaoURL
  }
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-5 bg-black/60">
      <CustomCarousel data={data} options={OPTIONS} />
      <button onClick={handleLogin}>
        <img src={kakao_login} alt="kakao_login_img" />
      </button>
    </div>
  )
}

export default Login
