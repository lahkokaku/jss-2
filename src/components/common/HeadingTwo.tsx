import HeadingTwoProps from '@/types/components/common/HeadingTwoProps'
import clsx from 'clsx'
import { FC } from 'react'

const HeadingTwo: FC<HeadingTwoProps> = ({ children, className }) => {
  return (
    <h2 className={clsx('font-bold sm:text-3xl text-2xl', className)}>
      {children}
    </h2>
  )
}

export default HeadingTwo
