import { Dialog, DialogContent, DialogFooter, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import React, { useState } from 'react'

const TimePicker = ({ title }) => {
  const [selectedTime, setSelectedTime] = useState(null)

  const handleSelect = index => {
    setSelectedTime(index + 1)
  }

  return (
    <Dialog>
      <DialogTrigger asChild className="w-full rounded-xl bg-white">
        <Button variant="outline">{title}</Button>
      </DialogTrigger>
      <DialogContent className="w-auto">
        <Carousel
          opts={{
            align: 'start',
            dragFree: true,
          }}
          orientation="vertical"
          className="w-full max-w-xs"
          setApi={api => {
            api.on('select', () => {
              const selectedIndex = api.selectedScrollSnap()
              handleSelect(selectedIndex)
            })
          }}
        >
          <CarouselContent className="-mt-1 h-[200px]">
            {Array.from({ length: 24 }).map((_, index) => (
              <CarouselItem key={index} className="pt-1 md:basis-1/2">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      <span className="text-3xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <DialogFooter>
          <Button className="rounded-2xl bg-surface text-text" onClick={() => setSelectedTime(null)}>
            취소
          </Button>
          <Button className="rounded-2xl" onClick={() => console.log('선택된 시간:', selectedTime)}>
            선택
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default TimePicker
