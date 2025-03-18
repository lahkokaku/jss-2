import CardProps from '@/types/components/common/CardProps'
import clsx from 'clsx'
import { FC } from 'react'

const Card: FC<CardProps> = ({ children, className }) => {

  return (
    <div
      className={
        clsx(
          'bg-glass rounded-xl',
          className
        )
      }
    >
      {children}
    </div>
  )
}

export default Card