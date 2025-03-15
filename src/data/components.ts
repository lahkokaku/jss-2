import { lazy } from 'react'

export default {
  // Pages
  HomePage: lazy(() => import('@/pages/HomePage')),
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
  // Components Sections
  Hero: lazy(() => import('@/components/sections/Hero')),
  NotFound: lazy(() => import('@/components/sections/NotFound')),
}