import axiosInstance from '@/services/instance/axiosInstance'
import { AxiosError } from 'axios'

export const login = async (code: string) => {
  try {
    const response = await axiosInstance.post('/user/kakaoLogin', code, {
      headers: {
        'Content-Type': 'text/plain',
      },
    })
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || 'Error during login')
    } else {
      throw new Error('An unexpected error occurred')
    }
  }
}
