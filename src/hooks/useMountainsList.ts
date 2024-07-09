import { useQuery } from '@tanstack/react-query'
import { getMountainsList } from '@/services/api/schedule'
import { useMemo } from 'react'

const useMountainsList = () => {
  const { data, isError } = useQuery({
    queryKey: ['mountainsList'],
    queryFn: getMountainsList,
    refetchOnWindowFocus: false,
  })

  const transformedData = useMemo(() => {
    if (!data) return []
    return data.content.map(item => ({
      key: item.mntiName,
      value: item.mntiListNo,
    }))
  }, [data])

  return { data: transformedData, isError }
}

export default useMountainsList
