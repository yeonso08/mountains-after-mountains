import { useQuery } from '@tanstack/react-query'
import { getMountainsList } from '@/services/api/schedule'

const useMountainsList = () => {
  return useQuery({
    queryKey: ['mountainsList'],
    queryFn: getMountainsList,
    refetchOnWindowFocus: false,
  })
}

export default useMountainsList
