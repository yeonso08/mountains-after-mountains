import Header from '@/components/layouts/header'

const ListSchedule = () => {
  return (
    <div className="flex h-full flex-col">
      <Header title="등산 일정" rightAction={<button className="text-b2 text-primary">추가</button>} />
      <div className="flex h-full flex-col justify-between bg-background p-5">
        <div className="rounded-[20px] bg-white p-5">
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default ListSchedule
