import StarRate from './StarRate'
import Altitude from '@/assets/icons/altitude.svg?react'

type Props = {
  mountain: {
    name: string
    rates: number
    address: string
    altitude: number
  }
}

const MountainInfo = ({ mountain }: Props) => {
  return (
    <div className="flex items-start justify-between">
      <div>
        <div className="flex gap-2">
          <div className="text-h3 text-gray-900">{mountain.name}</div>
          <StarRate difficulty={mountain.rates} />
        </div>
        <div className="text-b3 text-gray-700">{mountain.address}</div>
      </div>
      <div className="flex items-center gap-1">
        <Altitude />
        <div className="text-b3 text-gray-700">{`${mountain.altitude}m`}</div>
      </div>
    </div>
  )
}

export default MountainInfo
