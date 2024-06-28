import FooterButton from '@/components/common/button/FooterButton'
import Header from '@/components/layouts/header'
import { Select, SelectTrigger } from '@/components/ui/select'
import { AsteriskIcon } from '@/icons'

const RegisterSchedule = () => {
  return (
    <div className="flex h-full flex-col">
      <Header title="등산일정 등록" />
      <div className="flex h-full flex-col justify-between p-5">
        <div className="">
          <div className="flex text-b1">
            어떤 산에 가시나요?
            <AsteriskIcon />
          </div>
          <Select>
            <SelectTrigger className="rounded-xl bg-white">test</SelectTrigger>
          </Select>
        </div>

        <FooterButton>일정 등록하기</FooterButton>
      </div>
    </div>
  )
}

export default RegisterSchedule
