import BadgeProps from '@/types/components/common/BadgeProps'
import clsx from 'clsx'
import { FC } from 'react'

const Badge: FC<BadgeProps> = ({children, className}) => {

  return (
    <button 
      className={
        clsx(
          'sm:text-md text-sm',
          'bg-glass px-2 py-1 rounded-lg',
          className
        )
      }
    >
      {children}
    </button>
  )
}

export default Badge