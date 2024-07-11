import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import FooterButton from '@/components/common/button/FooterButton.tsx'
import CustomTimePicker from '@/pages/schedule/components/CustomTimePicker.tsx'
import '@/pages/schedule/components/embla.css'

interface TimePickerProps {
  title: string
}

const TimePicker = ({ title }: TimePickerProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild className="w-full rounded-xl bg-white">
        <Button variant="outline">{title}</Button>
      </DialogTrigger>
      <DialogContent className="w-auto rounded-[20px]">
        <div className="flex items-center justify-center">
          <CustomTimePicker />
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
