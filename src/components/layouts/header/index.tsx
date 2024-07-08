import { BackIcon } from '@/icons'
import { useNavigate } from 'react-router-dom'
import { ReactNode } from 'react'

interface HeaderProps {
  title?: string
  rightAction?: ReactNode
}

const Header = ({ title, rightAction }: HeaderProps) => {
  const navigate = useNavigate()

  return (
    <div className="flex items-center px-4 py-3">
      <button className="w-1/3 p-2" onClick={() => navigate(-1)}>
        <BackIcon />
      </button>
      <div className="flex w-1/3 justify-center text-h5 text-gray-900">{title}</div>
      <div className="flex w-1/3 justify-end">{rightAction}</div>
    </div>
  )
}

export default Header
