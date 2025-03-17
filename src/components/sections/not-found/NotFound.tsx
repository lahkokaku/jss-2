import { FC } from 'react'
import { Link } from 'react-router-dom'
import components from '@/data/components'

const { Button } = components

const NotFound: FC = () => {
  return (
    <section className='flex container flex-col justify-center items-center h-screen text-center fade-in-up'>
      <div className='sm:text-5xl text-3xl font-bold mb-5'>
        The page is not available
      </div>
      <div className='sm:text-xl mb-5'>
        It seems that you are lost, but fear not, we can take you home.
      </div>
      <Link to='/'>
        <Button prominence='secondary'>Home</Button>
      </Link>
    </section>
  )
}

export default NotFound
