import HeadingThreeProps from '@/types/components/common/HeadingThreeProps'
import clsx from 'clsx'
import { FC } from 'react'

const HeadingThree: FC<HeadingThreeProps> = ({ children, className }) => {
  return (
    <h3 className={clsx('font-bold sm:text-2xl text-xl', className)}>
      {children}
    </h3>
  )
}

export default HeadingThree
