import { ReactNode } from 'react'

interface CommonCardProps {
  children: ReactNode
}

const CommonCard = ({ children }: CommonCardProps) => {
  return <div className="rounded-[20px] bg-white p-5">{children}</div>
}

export default CommonCard
