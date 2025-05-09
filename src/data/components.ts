import { lazy } from 'react'

export default {
  // Pages
  HomePage: lazy(() => import('@/pages/HomePage')),
  ProjectsPage: lazy(() => import('@/pages/ProjectsPage')),
  ProjectDetailPage: lazy(() => import('@/pages/ProjectDetailPage')),
  NotFoundPage: lazy(() => import('@/pages/NotFoundPage')),
  // Components
  NavBar: lazy(() => import('@/components/NavBar')),
  Footer: lazy(() => import('@/components/Footer')),
  ScrollToTop: lazy(() => import('@/components/ScrollToTop')),
  // Components Common
  PagePlaceholder: lazy(() => import('@/components/common/PagePlaceholder')),
  TextHighlight: lazy(() => import('@/components/common/TextHighlight')),
  Separator: lazy(() => import('@/components/common/Separator')),
  Button: lazy(() => import('@/components/common/Button')),
  HeadingOne: lazy(() => import('@/components/common/HeadingOne')),
  HeadingTwo: lazy(() => import('@/components/common/HeadingTwo')),
  HeadingThree: lazy(() => import('@/components/common/HeadingThree')),
  Badge: lazy(() => import('@/components/common/Badge')),
  Card: lazy(() => import('@/components/common/Card')),
  LinkText: lazy(() => import('@/components/common/LinkText')),
  // Components Sections
  Hero: lazy(() => import('@/components/sections/home/Hero')),
  FeaturedProjects: lazy(() => import('@/components/sections/projects/FeaturedProjects')),
  FeaturedProjectCard: lazy(() => import('@/components/sections/projects/FeaturedProjectCard')),
  ProjectDetail: lazy(() => import('@/components/sections/project-detail/ProjectDetail')),
  ProjectDetailHeader: lazy(() => import('@/components/sections/project-detail/ProjectDetailHeader')),
  ProjectDetailDescription: lazy(() => import('@/components/sections/project-detail/ProjectDetailDescription')),
  ProjectDetailLink: lazy(() => import('@/components/sections/project-detail/ProjectDetailLink')),
  ProjectDetailInterface: lazy(() => import('@/components/sections/project-detail/ProjectDetailInterface')),
  NotFound: lazy(() => import('@/components/sections/not-found/NotFound')),
}