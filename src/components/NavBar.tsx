import useEventListener from '@/hooks/useEventListener'
import clsx from 'clsx'
import { FC, startTransition, useState } from 'react'
import { Link } from 'react-router-dom'
import { app } from '@/config'
import { getIsMobile } from '@/utils/responsive'
import components from '@/data/components'
import { RiMenu3Fill } from '@remixicon/react'

const { yScrollOffset } = app

const { NavBarLinks } = components

const NavBar: FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(getIsMobile())
  const [isBackdrop, setIsBackdrop] = useState<boolean>(false)
  const [isToggled, setIsToggled] = useState<boolean>(false)

  const toggleDropdown = (): void => {
    startTransition(() => 
      setIsToggled(!isToggled)
    )
  }

  useEventListener(null, 'resize', (): void => {
    setIsMobile(getIsMobile())
  })

  useEventListener(null, 'scroll', (): void => {
    const { scrollY } = window
    if (scrollY > yScrollOffset) {
      setIsBackdrop(true)
    } else {
      setIsBackdrop(false)
    }
  })

  return (
    <nav
      className={clsx(
        'flex justify-between items-center top-0 fixed container py-4 z-50',
        'transition',
        isBackdrop && 'backdrop-blur-xl bg-secondary-dark-trans'
      )}
    >
      <Link to='/'>
        <img className='md:h-8 h-6' src='/assets/images/jss-v2.png' />
      </Link>
      <div className='flex gap-4'>
        {!isMobile && <NavBarLinks />}
        {isMobile && (
          <div className='relative'>
            <RiMenu3Fill
              onClick={toggleDropdown}
              onBlur={toggleDropdown}
              className='text-primary-light focus:outline-primary-light'
            />
            {isToggled && (
              <div className='absolute right-0 mt-2 bg-secondary-dark-trans flex flex-col gap-2 p-3 rounded-lg'>
                <NavBarLinks />
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
