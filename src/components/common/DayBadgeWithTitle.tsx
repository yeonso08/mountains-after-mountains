import DayBadge from '@/components/common/DayBadge.tsx'

interface DayBadgeWithTitleType {
  title: string
  text: string
}
const DayBadgeWithTitle = ({ title, text }: DayBadgeWithTitleType) => {
  return (
    <div className="flex gap-1">
      <DayBadge text={text} />
      <div className="text-h5">{title}</div>
    </div>
  )
}

export default DayBadgeWithTitle
