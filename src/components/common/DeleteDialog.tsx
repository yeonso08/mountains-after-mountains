import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from '@/components/ui/dialog.tsx'
import FooterButton from '@/components/common/button/FooterButton.tsx'

const DeleteDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="text-b2 text-primary">삭제</DialogTrigger>
      <DialogContent className="rounded-[20px]">
        <div className="flex items-center justify-center text-b1">삭제하시겠습니까 ?</div>
        <DialogFooter className="gap-4">
          <DialogClose>
            <FooterButton size="sm" variant="surface">
              취소
            </FooterButton>
          </DialogClose>
          <FooterButton variant="primary" size="sm">
            삭제
          </FooterButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DeleteDialog
