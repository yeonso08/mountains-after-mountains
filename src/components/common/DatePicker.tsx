import { Dialog, DialogContent, DialogFooter, DialogTrigger } from '@/components/ui/dialog.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Calendar } from '@/components/ui/calendar.tsx'
import { useState } from 'react'

const DatePicker = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Dialog>
      <DialogTrigger asChild className="w-full rounded-xl bg-white">
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="w-auto">
        <Calendar mode="single" selected={date} onSelect={setDate} />
        <DialogFooter>
          <Button className="rounded-2xl bg-surface text-text">취소</Button>
          <Button className="rounded-2xl">선택</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DatePicker
