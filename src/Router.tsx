import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import components from './data/components'

const {
  HomePage,
  ProjectsPage,
  ProjectDetailPage,
  NotFoundPage
} = components

const Router: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectSlug" element={<ProjectDetailPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default Router
