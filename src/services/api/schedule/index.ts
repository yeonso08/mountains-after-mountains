import axiosInstance from '@/services/instance/axiosInstance.ts'
import { AxiosError } from 'axios'

export const getMoutainsList = async () => {
  try {
    const response = await axiosInstance.get('/main/list')
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || 'Error fetching feature A data')
    } else {
      throw new Error('An unexpected error occurred')
    }
  }
}
