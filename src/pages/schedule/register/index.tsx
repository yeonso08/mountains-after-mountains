import FooterButton from '@/components/common/button/FooterButton'
import Header from '@/components/layouts/header'
import { Select, SelectTrigger } from '@/components/ui/select'
import TextWithSubtext from '@/pages/schedule/components/TextWithSubtext.tsx'

const RegisterSchedule = () => {
  return (
    <div className="flex h-full flex-col">
      <Header title="등산일정 등록" />
      <div className="flex h-full flex-col justify-between p-5">
        <TextWithSubtext title="어떤 산에 가시나요?" asteriskIcon={true}>
          <Select>
            <SelectTrigger className="rounded-xl bg-white">test</SelectTrigger>
          </Select>
        </TextWithSubtext>
        <FooterButton>일정 등록하기</FooterButton>
      </div>
    </div>
  )
}

export default RegisterSchedule
