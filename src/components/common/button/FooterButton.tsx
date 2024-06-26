import React from 'react'

interface FooterButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'bright'
  className?: string
  disabled?: boolean
}

const variantClasses = {
  primary: 'bg-main text-white hover:bg-active',
  bright: 'bg-green-200 text-green-600',
}

const FooterButton = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  disabled = false,
  ...props
}: FooterButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex w-full items-center justify-center rounded-2xl py-5 text-b1 disabled:bg-gray-200 disabled:text-gray-500 ${variantClasses[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default FooterButton
