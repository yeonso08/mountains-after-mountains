import FooterButton from '@/components/common/button/FooterButton'
import Header from '@/components/layouts/header'
import useMountainsList from '@/hooks/useMountainsList.ts'
import { useState } from 'react'
import ScheduleFormSection from '@/pages/schedule/components/ScheduleFormSection.tsx'
import DeleteDialog from '@/components/common/DeleteDialog.tsx'
import useMountainCourse from '@/hooks/useMountainCourse.ts'

const ModifySchedule = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [mountainsValue, setMountainsValue] = useState({ key: '', value: '' })
  const [mountainCourseValue, setMountainCourseValue] = useState({ key: '', value: '' })
  const [PersonnelValue, setPersonnelValue] = useState({ key: '', value: '' })
  const { data: mountainsListOption, isError: mountainsListError } = useMountainsList()
  const { data: mountainCourseOption, isError: mountainCourseError } = useMountainCourse(
    mountainsValue.value ? mountainsValue.value : null,
  )
  console.log(mountainCourseValue, PersonnelValue)
  return (
    <div className="flex h-full flex-col">
      <Header title="등산일정 수정" rightAction={<DeleteDialog />} />
      <div className="flex h-full flex-col justify-between p-5">
        <ScheduleFormSection
          date={date}
          setDate={setDate}
          mountainsListOption={mountainsListOption}
          mountainsListError={mountainsListError}
          setMountainsValue={setMountainsValue}
          mountainCourseOption={mountainCourseOption}
          mountainCourseError={mountainCourseError}
          setMountainCourseValue={setMountainCourseValue}
          setPersonnelValue={setPersonnelValue}
        />
        <FooterButton>일정 수정하기</FooterButton>
      </div>
    </div>
  )
}

export default ModifySchedule
