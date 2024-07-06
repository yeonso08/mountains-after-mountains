import axiosInstance from '@/services/instance/axiosInstance.ts'
import { AxiosError } from 'axios'
import { MountainListResponse } from '@/types/schedule/index.ts'

export const getMountainsList = async () => {
  try {
    const response = await axiosInstance.get<MountainListResponse>('/main/list')
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || 'Error fetching feature A data')
    } else {
      throw new Error('An unexpected error occurred')
    }
  }
}
