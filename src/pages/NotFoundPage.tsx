import { FC, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import components from '@/data/components'
import PagePlaceholder from '@/components/common/PagePlaceholder'

const {
  NotFound
} = components

const NotFoundPage:FC = () => {
  return <>
    <Helmet>
      <title>Page not found | JSS</title>
    </Helmet>
    <Suspense fallback={<PagePlaceholder />}>
      <NotFound />
    </Suspense>
  </>
}

export default NotFoundPage