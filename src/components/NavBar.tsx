import { FC } from 'react'
import { Link } from 'react-router-dom'

const NavBar: FC = () => {
  return (
    <nav className='flex top-0 fixed container py-4 backdrop-blur-xl'>
      <Link to='/'>
        <img className='md:h-8 h-6' src='/assets/images/jss-v2.png' />
      </Link>
    </nav>
  )
}

export default NavBar
