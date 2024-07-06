import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import CustomCarousel from '@/components/ui/CustomCarousel.tsx'
import FooterButton from '@/components/common/button/FooterButton.tsx'

interface TimePickerProps {
  title: string
}

const TimePicker = ({ title }: TimePickerProps) => {
  const [selectedTime, setSelectedTime] = useState({ hour: 12, minute: 0 })

  const handleTimeChange = (hour: number, minute: number) => {
    setSelectedTime({ hour, minute })
  }

  return (
    <Dialog>
      <DialogTrigger asChild className="w-full rounded-xl bg-white">
        <Button variant="outline">{title}</Button>
      </DialogTrigger>
      <DialogContent className="w-auto rounded-[20px]">
        <div className="flex flex-col items-center">
          <CustomCarousel onTimeChange={handleTimeChange} initialTime={selectedTime} />
        </div>
        <DialogFooter className="gap-4">
          <DialogClose>
            <FooterButton size="sm" variant="surface">
              취소
            </FooterButton>
          </DialogClose>
          <FooterButton size="sm">선택</FooterButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default TimePicker
