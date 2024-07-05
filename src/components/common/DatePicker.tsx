import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from '@/components/ui/dialog.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Calendar } from '@/components/ui/calendar.tsx'
import { useState } from 'react'
import FooterButton from '@/components/common/button/FooterButton.tsx'

interface DatePickerProps {
  title: string
}
const DatePicker = ({ title }: DatePickerProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Dialog>
      <DialogTrigger asChild className="w-full rounded-xl bg-white">
        <Button variant="outline">{title}</Button>
      </DialogTrigger>
      <DialogContent className="w-auto">
        <Calendar mode="single" selected={date} onSelect={setDate} />
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

export default DatePicker
