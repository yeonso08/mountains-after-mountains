import MountainInfo from '../common/MountainInfo'
import Top100Badge from '../common/Top100Badge'

type Props = {
  mountain: {
    name: string
    rates: number
    address: string
    altitude: number
    img: string
    isTop100: boolean
  }
}

const MountainCard = ({ mountain }: Props) => {
  return (
    <div className="my-[14px] box-border cursor-pointer px-5">
      <div className="relative h-[200px]">
        {mountain.isTop100 && <Top100Badge className="absolute right-3 top-[12px]" />}
        <img src={mountain.img} className="h-full w-full rounded-[20px]" />
      </div>
      <MountainInfo mountain={mountain} />
    </div>
  )
}

export default MountainCard
