import FooterButton from '@/components/common/button/FooterButton'
import Header from '@/components/layouts/header'
import ScheduleFormSection from './components/ScheduleFormSection.tsx'
import useMountainsList from '@/hooks/useMountainsList.ts'
import { useState } from 'react'

const RegisterSchedule = () => {
  const [mountainsValue, setMountainsValue] = useState({ key: '', value: '' })
  const { data, isLoading } = useMountainsList()
  console.log(isLoading, mountainsValue)

  return (
    <div className="flex h-full flex-col">
      <Header title="등산일정 등록" />
      <div className="flex h-full flex-col justify-between p-5">
        <ScheduleFormSection mountainsListOption={data} setMountainsValue={setMountainsValue} />
        <FooterButton>일정 등록하기</FooterButton>
      </div>
    </div>
  )
}

export default RegisterSchedule
