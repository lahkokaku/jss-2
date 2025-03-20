import { FC } from 'react'
import components from '@/data/components'

const { LinkText } = components

const NavBarLinks: FC = () => {
  const scrollToContact = (): void => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <LinkText to='/'>Home</LinkText>
      <LinkText to='/projects'>Projects</LinkText>
      <LinkText
        to='#contact'
        ignoreActive={true}
        onClick={scrollToContact}
      >
        Contact
      </LinkText>
    </>
  )
}

export default NavBarLinks
