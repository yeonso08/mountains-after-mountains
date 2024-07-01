import { useState, useCallback } from 'react'
import ToggleButton from '@/components/common/button/ToggleButton'

const HomeToggleList = () => {
  const [lowOn, setLowOn] = useState<boolean>(false)
  const [middleOn, setMiddleOn] = useState<boolean>(false)
  const [highOn, setHighOn] = useState<boolean>(false)

  const onLowClick = useCallback(() => setLowOn(prev => !prev), [])
  const onMiddleClick = useCallback(() => setMiddleOn(prev => !prev), [])
  const onHighClick = useCallback(() => setHighOn(prev => !prev), [])

  return (
    <div className="flex gap-[10px] px-5 py-[21px]">
      <ToggleButton toggleOn={lowOn} onClick={onLowClick} text="낮은 산" />
      <ToggleButton toggleOn={middleOn} onClick={onMiddleClick} text="중간 산" />
      <ToggleButton toggleOn={highOn} onClick={onHighClick} text="높은 산" />
    </div>
  )
}

export default HomeToggleList
