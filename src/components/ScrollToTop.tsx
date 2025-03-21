import { FC, useState } from 'react'
import components from '@/data/components'
import { RiArrowUpFill } from '@remixicon/react'
import clsx from 'clsx'
import useEventListener from '@/hooks/useEventListener'
import { app } from '@/config'

const { yScrollOffset } = app
const { Button } = components

const ScrollToTop: FC = () => {
  const [isShown, setIsShown] = useState<boolean>(false)

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
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
        'fixed sm:bottom-16 bottom-12 sm:right-26 right-5 z-20',
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