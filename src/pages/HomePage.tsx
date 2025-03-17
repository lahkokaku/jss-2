import { FC, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import components from '@/data/components'
import PagePlaceholder from '@/components/common/PagePlaceholder'

const { Hero } = components

const HomePage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Home | JSS</title>
      </Helmet>
      <Suspense fallback={<PagePlaceholder />}>
        <Hero />
      </Suspense>
    </>
  )
}

export default HomePage
