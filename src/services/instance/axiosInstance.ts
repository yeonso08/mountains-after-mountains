import axios from 'axios'

const API_URL = `${import.meta.env.VITE_APP_API_URL}`

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
})

axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.response) {
      console.error('Backend returned status code: ', error.response.status)
      console.error('Response error details: ', error.response.data)

      switch (error.response.status) {
        case 400:
          alert('잘못된 요청입니다. 입력 값을 확인해주세요.')
          break
        case 401:
          alert('인증에 실패했습니다. 로그인해주세요.')
          window.dispatchEvent(new CustomEvent('unauthorized'))
          sessionStorage.removeItem('authToken')
          break
        case 403:
          alert('접근 권한이 없습니다.')
          break
        case 404:
          alert('요청하신 자원을 찾을 수 없습니다.')
          break
        case 500:
          alert('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.')
          break
        default:
          alert(`알 수 없는 오류가 발생했습니다. 상태 코드: ${error.response.status}`)
      }
    } else if (error.request) {
      console.error('No response received from server')
      alert('서버에 응답이 없습니다. 네트워크를 확인해주세요.')
    } else {
      console.error('Error setting up the request:', error.message)
      alert(`요청 설정 중 오류가 발생했습니다: ${error.message}`)
    }
    return Promise.reject(error)
  },
)

export default axiosInstance
