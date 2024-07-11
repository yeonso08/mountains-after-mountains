import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import FooterButton from '@/components/common/button/FooterButton.tsx'
import CustomTimePicker from '@/pages/schedule/components/CustomTimePicker.tsx'
import '@/pages/schedule/components/embla.css'
import { useState } from 'react'

interface TimePickerProps {
  title: string
  setHour: (hour: number | null) => void
  setMinute: (minute: number | null) => void
}

const TimePicker = ({ title, setHour, setMinute }: TimePickerProps) => {
  const [open, setOpen] = useState(false)

  const handleSelectClick = () => {
    setOpen(false)
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="w-full rounded-xl bg-white">
        <Button variant="outline">{title}</Button>
      </DialogTrigger>
      <DialogContent className="w-auto rounded-[20px]">
        <div className="flex items-center justify-center">
          <CustomTimePicker setHour={setHour} setMinute={setMinute} />
        </div>
        <DialogFooter className="gap-4">
          <DialogClose asChild>
            <FooterButton size="sm" variant="surface">
              취소
            </FooterButton>
          </DialogClose>
          <FooterButton size="sm" onClick={handleSelectClick}>
            선택
          </FooterButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default TimePicker
