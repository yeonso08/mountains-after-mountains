import FooterButton from '@/components/common/button/FooterButton'
import Header from '@/components/layouts/header'
import useMountainsList from '@/hooks/useMountainsList.ts'
import { useState } from 'react'
import ScheduleFormSection from '@/pages/schedule/components/ScheduleFormSection.tsx'

const ModifySchedule = () => {
  const [mountainsValue, setMountainsValue] = useState({ key: '', value: '' })
  const { data, isLoading } = useMountainsList()
  console.log(mountainsValue, isLoading)
  return (
    <div className="flex h-full flex-col">
      <Header title="등산일정 수정" />
      <div className="flex h-full flex-col justify-between p-5">
        <ScheduleFormSection mountainsListOption={data} setMountainsValue={setMountainsValue} />
        <FooterButton>일정 수정하기</FooterButton>
      </div>
    </div>
  )
}

export default ModifySchedule
