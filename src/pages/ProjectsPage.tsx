import { FC, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import components from '@/data/components'

const { FeaturedProjects, PagePlaceholder } = components

const ProjectsPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Projects | JSS</title>
      </Helmet>
      <Suspense fallback={<PagePlaceholder />}>
        <FeaturedProjects />
      </Suspense>
    </>
  )
}

export default ProjectsPage
