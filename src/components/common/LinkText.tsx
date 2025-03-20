import LinkTextProps from '@/types/components/common/LinkTextProps'
import clsx from 'clsx'
import { FC } from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'

const LinkText: FC<LinkTextProps & NavLinkProps> = ({children, className, ignoreActive, ...props}) => {

  ignoreActive = ignoreActive ?? false

  return (
    <NavLink
      className={({isActive}) => 
        clsx(
          'transition duration-300',
          'font-semibold',
          (isActive && !ignoreActive) && 'text-secondary-light',
          'hover:text-secondary-light',
          className
        ) 
      }
      {...props}
    >
      {children}
    </NavLink>
  )
}

export default LinkText