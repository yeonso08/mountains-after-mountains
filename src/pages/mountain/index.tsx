import { useParams } from 'react-router-dom'

const Mountain = () => {
  const { mountainId } = useParams()

  return <div>{mountainId}</div>
}

export default Mountain
