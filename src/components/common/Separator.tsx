import SeparatorProps from '@/types/components/common/SeparatorProps'
import clsx from 'clsx'
import { FC } from 'react'

const Separator: FC<SeparatorProps> = ({ theme, width, height, className }) => {
  const separatorTheme =
    theme === 'dark' ? 'bg-gradient-dark' : 'bg-gradient-light'
  return (
    <div className={clsx(separatorTheme, width, height ?? 'h-1', className)} />
  )
}

export default Separator
