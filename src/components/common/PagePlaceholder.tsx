import { FC } from 'react'
import { PropagateLoader } from 'react-spinners'

const PagePlaceholder: FC = () => {
  return (
    <div className='flex h-[88vh] items-center justify-center'>
      <PropagateLoader color='oklch(0.792 0.209 151.711)' />
    </div>
  )
}

export default PagePlaceholder
