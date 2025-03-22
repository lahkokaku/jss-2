import { FC, Suspense, useMemo } from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'
import { featuredProjects } from '@/data/featuredProjects'
import FeaturedProject from '@/types/data/FeaturedProjects'
import components from '@/data/components'
import PagePlaceholder from '@/components/common/PagePlaceholder'

const { ProjectDetail, NotFound } = components

const ProjectDetailPage: FC = () => {
  const location = useLocation()
  const { pathname } = location
  const projectSlug = useMemo(
    () => pathname.slice(pathname.lastIndexOf('/')).substring(1),
    [location]
  )

  const currentProject: FeaturedProject | undefined = useMemo(
    () => featuredProjects.find((project) => project.slug === projectSlug),
    [projectSlug]
  )

  return (
    <>
      <Helmet>
        <title>
          {currentProject ? currentProject.title : 'Page not found'} | JSS
        </title>
      </Helmet>
      <Suspense fallback={<PagePlaceholder />}>
        {currentProject ? <ProjectDetail currentProject={currentProject} /> : <NotFound />}
      </Suspense>
    </>
  )
}

export default ProjectDetailPage
