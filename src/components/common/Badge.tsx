import { PropsWithChildren } from 'react'

type Props = {
  className?: string
}

const Badge = ({ className, children, ...props }: PropsWithChildren<Props>) => {
  return (
    <div className={`box-border rounded-[20px] bg-black px-[10px] py-[2px] text-c1 text-white ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Badge
