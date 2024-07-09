import FooterButton from '@/components/common/button/FooterButton'
import Header from '@/components/layouts/header'
import useMountainsList from '@/hooks/useMountainsList.ts'
import { useState } from 'react'
import ScheduleFormSection from '@/pages/schedule/components/ScheduleFormSection.tsx'
import DeleteDialog from '@/components/common/DeleteDialog.tsx'
import useMountainCourse from '@/hooks/useMountainCourse.ts'

const ModifySchedule = () => {
  const [mountainsValue, setMountainsValue] = useState({ key: '', value: '' })
  const [mountainCourseValue, setMountainCourseValue] = useState({ key: '', value: '' })
  const { data: mountainsListOption, isError: mountainsListError } = useMountainsList()
  const { data: mountainCourseOption, isError: mountainCourseError } = useMountainCourse(
    mountainsValue.value ? mountainsValue.value : null,
  )
  console.log(mountainCourseValue)
  return (
    <div className="flex h-full flex-col">
      <Header title="등산일정 수정" rightAction={<DeleteDialog />} />
      <div className="flex h-full flex-col justify-between p-5">
        <ScheduleFormSection
          mountainsListOption={mountainsListOption}
          mountainsListError={mountainsListError}
          setMountainsValue={setMountainsValue}
          mountainCourseOption={mountainCourseOption}
          mountainCourseError={mountainCourseError}
          setMountainCourseValue={setMountainCourseValue}
        />
        <FooterButton>일정 수정하기</FooterButton>
      </div>
    </div>
  )
}

export default ModifySchedule
