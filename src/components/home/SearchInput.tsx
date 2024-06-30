import Mountains from '@/assets/icons/mountains.svg?react'
import SearchCommandList from './SearchCommandList'
import { ChangeEvent, useState } from 'react'

// 임시 데이터
const data = [
  { id: 0, name: '청계산' },
  { id: 1, name: '북한산' },
  { id: 2, name: '청운산' },
  { id: 3, name: '청산' },
]

const SearchInput = () => {
  const [value, setValue] = useState<string>('')

  const filteredData = value.length ? data.filter(item => item.name.includes(value)) : []

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  // TODO debounce 적용 필요

  return (
    <div className="relative">
      <div className="m-5 box-border flex gap-3 rounded-[40px] p-5 align-middle shadow-[0_1px_10px_rgba(0,0,0,0.1)]">
        <Mountains width={50} height={25} />
        <input className="w-full text-b2 focus:outline-none" value={value} onChange={onChange} />
      </div>
      <SearchCommandList data={filteredData} />
    </div>
  )
}

export default SearchInput
