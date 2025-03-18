import LinkTextProps from '@/types/components/common/LinkTextProps'
import clsx from 'clsx'
import { FC } from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'

const LinkText: FC<LinkTextProps & NavLinkProps> = ({children, className, ...props}) => {

  return (
    <NavLink
      className={
        clsx(
          'transition duration-300',
          'font-semibold hover:font-bold',
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