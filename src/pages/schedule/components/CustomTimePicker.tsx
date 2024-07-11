import { EmblaOptionsType } from 'embla-carousel'
import { TimePickerItem } from '@/pages/schedule/components/TimePickerItem.tsx'

type PropType = {
  loop?: EmblaOptionsType['loop']
}

const CustomTimePicker = (props: PropType) => {
  const { loop } = props

  return (
    <div className="embla">
      <TimePickerItem slideCount={24} perspective="left" loop={loop} label="시" isMinute={false} />
      <TimePickerItem slideCount={12} perspective="right" loop={loop} label="분" isMinute={true} />
    </div>
  )
}

export default CustomTimePicker
