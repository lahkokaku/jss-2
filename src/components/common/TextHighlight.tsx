import TextHighlightProps from '@/types/components/common/TextHighlightProps'
import clsx from 'clsx'
import { FC, useEffect, useRef, useState } from 'react'

const TextHighlight: FC<TextHighlightProps> = ({ children, className }) => {
  const ref = useRef<HTMLElement | null>(null)
  const [degree, setDegree] = useState<number>(0)

  useEffect((): (() => void) => {
    const interval = setInterval((): void => {
      setDegree((degree + 20) % 360)
      if (ref.current) {
        ref.current.style.backgroundImage = `linear-gradient(${degree}deg, var(--color-primary-light), var(--color-secondary-light))`
      }
    }, 100)
    return (): void => clearInterval(interval)
  })

  return (
    <span
      ref={ref}
      className={clsx(
        'from-primary-light to-secondary-light bg-clip-text',
        'transition text-transparent',
        className
      )}
    >
      {children}
    </span>
  )
}

export default TextHighlight
