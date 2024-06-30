import Search from '@/assets/icons/search.svg?react'

type Props = {
  data: {
    name: string
    id: number
  }[]
}

const SearchCommandList = ({ data }: Props) => {
  return (
    <div
      className={`absolute top-[52px] m-5 box-border w-[calc(100%-40px)] rounded-lg border border-gray-200 bg-white ${data.length === 0 && 'invisible'} transition-all`}
    >
      {data?.map((item, index) => (
        <div
          key={item.id}
          className={`box-border flex w-full gap-3 ${data.length - 1 === index ? 'rounded-b-lg' : 'border-b'} ${index === 0 && 'rounded-t-lg'} cursor-pointer border-gray-200 p-5 align-middle hover:bg-gray-200`}
        >
          <Search />
          <div className="text-b2">{item.name}</div>
        </div>
      ))}
    </div>
  )
}

export default SearchCommandList
