import useEventListener from '@/hooks/useEventListener'
import clsx from 'clsx'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { app } from '@/config'

const { yScrollOffset } = app

const NavBar: FC = () => {
  const [isBackdrop, setIsBackdrop] = useState<boolean>(false)

  useEventListener(null, 'scroll', (): void => {
    const { scrollY } = window
    if (scrollY > yScrollOffset) {
      setIsBackdrop(true)
    } else {
      setIsBackdrop(false)
    }
  })

  return (
    <nav className={
      clsx(
        'flex top-0 fixed container py-4 z-50',
        'transition',
        isBackdrop && 'backdrop-blur-xl bg-secondary-dark-trans'
      )
    }>
      <Link to='/'>
        <img className='md:h-8 h-6' src='/assets/images/jss-v2.png' />
      </Link>
    </nav>
  )
}

export default NavBar
