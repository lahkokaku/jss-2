import PageHeadingProps from '@/types/components/common/HeadingOneProps'
import clsx from 'clsx'
import { FC } from 'react'

const HeadingOne: FC<PageHeadingProps> = ({ children, className }) => {
  return (
    <h1 className={clsx('font-bold md:text-4xl text-3xl', className)}>
      {children}
    </h1>
  )
}

export default HeadingOne
