import TextHighlightProps from '@/types/components/common/TextHighlightProps'
import clsx from 'clsx'
import { FC, useRef } from 'react'

const TextHighlight: FC<TextHighlightProps> = ({ children, className }) => {
  const ref = useRef<HTMLElement | null>(null)

  return (
    <span
      ref={ref}
      className={clsx(
        'bg-gradient-light bg-clip-text',
        'transition text-transparent',
        className
      )}
    >
      {children}
    </span>
  )
}

export default TextHighlight
