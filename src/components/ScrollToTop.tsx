import { FC, useState } from 'react'
import components from '@/data/components'
import { RiArrowUpFill } from '@remixicon/react'
import clsx from 'clsx'
import useEventListener from '@/hooks/useEventListener'

const { Button } = components

const yScrollOffset = 50

const ScrollToTop: FC = () => {
  const [isShown, setIsShown] = useState<boolean>(false)

  const scrollToTop = (): void => {
    window.scrollTo(0, 0)
  }

  useEventListener(null, 'scroll', (): void => {
    const { scrollY } = window
    if (scrollY > yScrollOffset) {
      setIsShown(true)
    } else {
      setIsShown(false)
    }
  })

  return (
    <div className={
      clsx(
        'fixed bottom-16 sm:right-30 right-5 z-20',
        isShown ? 'opacity-75' : 'opacity-0',
        'transition-all'
      )
    }>
      <Button onClick={scrollToTop} size='small'>
        <RiArrowUpFill />
      </Button>
    </div>
  )
}

export default ScrollToTop