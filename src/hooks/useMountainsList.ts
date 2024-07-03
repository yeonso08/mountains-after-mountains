import { useQuery } from '@tanstack/react-query'
import { getMoutainsList } from '@/services/api/schedule'

const useMountainsList = () => {
  return useQuery({
    queryKey: ['mountainsList'],
    queryFn: getMoutainsList,
    refetchOnWindowFocus: false,
  })
}

export default useMountainsList
