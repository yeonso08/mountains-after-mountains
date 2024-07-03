import axios from 'axios'

const API_URL = `${import.meta.env.VITE_APP_API_URL}`

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
})

axiosInstance.interceptors.request.use(
  function (config) {
    const token = sessionStorage.getItem('authToken')
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

      if (error.response.status === 401) {
        window.dispatchEvent(new CustomEvent('unauthorized'))
        sessionStorage.removeItem('authToken')
      } else if (error.response.status === 500) {
        // alert('server error')
      }
    } else if (error.request) {
      console.error('No response received from server')
      // alert('Cannot connect to the server. Please check your network.')
    } else {
      console.error('Error setting up the request:', error.message)
    }
  },
)

export default axiosInstance
