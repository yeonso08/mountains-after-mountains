import TextWithSubtext from '@/pages/schedule/components/TextWithSubtext.tsx'
import CommonSelect from '@/components/common/CommonSelect.tsx'
import DatePicker from '@/components/common/DatePicker.tsx'
import TimePicker from '@/components/common/TimePicker.tsx'
import { PersonnelOption } from '@/constants/SelectOptions.ts'

interface ScheduleFormSectionProps {
  setMountainsValue: (value: { key: string; value: string }) => void
  mountainsListOption: any
}
const ScheduleFormSection = ({ setMountainsValue, mountainsListOption }: ScheduleFormSectionProps) => {
  return (
    <div className="flex flex-col gap-[30px]">
      <TextWithSubtext title="어떤 산에 가시나요?" asteriskIcon={true}>
        <CommonSelect
          items={mountainsListOption}
          placeholder={'산을 골라주세요'}
          setSelectedValue={setMountainsValue}
          ariaLabel={'산 선택'}
        />
      </TextWithSubtext>
      <TextWithSubtext
        title="언제 입산하시나요?"
        subtext="일몰시간을 확인하고 늦지 않게 입산해주세요!"
        asteriskIcon={true}
      >
        <div className="flex gap-2">
          <DatePicker title="날짜" />
          <TimePicker title="시간" />
        </div>
      </TextWithSubtext>
      <TextWithSubtext title="어떤 코스로 가시나요?">
        <CommonSelect
          items={mountainsListOption}
          placeholder={'코스를 골라주세요'}
          setSelectedValue={setMountainsValue}
          ariaLabel={'코스 선택'}
        />
      </TextWithSubtext>
      <TextWithSubtext title="몇 명의 일행으로 가시나요?">
        <CommonSelect
          items={PersonnelOption}
          placeholder={'산을 골라주세요'}
          setSelectedValue={setMountainsValue}
          ariaLabel={'일행 선택'}
        />
      </TextWithSubtext>
    </div>
  )
}

export default ScheduleFormSection
