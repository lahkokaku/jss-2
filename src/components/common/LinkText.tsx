import LinkTextProps from '@/types/components/common/LinkTextProps'
import clsx from 'clsx'
import { FC } from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'

const LinkText: FC<LinkTextProps & NavLinkProps> = ({children, className, to, ...props}) => {

  return (
    <NavLink
      className={({isActive}) => 
        clsx(
          'transition duration-300',
          'font-semibold',
          (isActive && typeof to === 'string' ) && 'text-secondary-light',
          'hover:text-secondary-light',
          className
        ) 
      }
      to={to}
      {...props}
    >
      {children}
    </NavLink>
  )
}

export default LinkText