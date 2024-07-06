import { useParams } from 'react-router-dom'

type Props = {}

const Mountain = (props: Props) => {
  const { mountainId } = useParams()

  return <div>{mountainId}</div>
}

export default Mountain
