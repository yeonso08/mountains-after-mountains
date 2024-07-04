import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import Carousel from '@/components/ui/carousel.tsx'

const LOOP = false

interface TimePickerProps {
  title: string
}

const TimePicker: React.FC<TimePickerProps> = ({ title }) => {
  const [selectedTime, setSelectedTime] = useState({ hour: 12, minute: 0 })

  const handleTimeChange = (hour: number, minute: number) => {
    setSelectedTime({ hour, minute })
  }

  return (
    <Dialog>
      <DialogTrigger asChild className="w-full rounded-xl bg-white">
        <Button variant="outline">{title}</Button>
      </DialogTrigger>
      <DialogContent className="h-[320px] w-auto">
        <div className="flex flex-col items-center">
          <Carousel onTimeChange={handleTimeChange} initialTime={selectedTime} />
        </div>
        <DialogFooter>
          <DialogClose>
            <Button className="rounded-2xl bg-surface text-text">취소</Button>
          </DialogClose>
          <Button className="rounded-2xl">선택</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default TimePicker
