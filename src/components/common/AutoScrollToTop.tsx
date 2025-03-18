import { FC } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const AutoScrollToTop: FC = () => {

  const { pathname } = useLocation()

  useEffect((): void => {
    window.scrollTo(0, 0)
  }, [pathname])

  return <></>
}

export default AutoScrollToTop