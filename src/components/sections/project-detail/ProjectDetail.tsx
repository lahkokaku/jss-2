import ProjectDetailProps from '@/types/components/sections/project-detail/ProjectDetailProps'
import { FC } from 'react'
import components from '@/data/components'
import { RiCodeBoxFill } from '@remixicon/react'

const {
  LinkText,
  ProjectDetailHeader,
  ProjectDetailDescription,
  ProjectDetailLink,
  ProjectDetailInterface
} = components

const ProjectDetail: FC<ProjectDetailProps> = ({currentProject}) => {
  const {
    slug,
    thumbnail,
    title,
    shortDescription,
    techStack,
    description,
    codeDisclaimer,
    linkCode,
    linkWeb,
    interfaces
  } = currentProject

  return (
    <section className='container sm:pt-32 pt-24'>
      <div className='fade-in-up mb-4 flex gap-2'>
        <RiCodeBoxFill />
        <LinkText ignoreActive={true} to='/projects'>Projects</LinkText>
        &gt;
        <span className='text-secondary-light'>{title}</span>
      </div>
      <ProjectDetailHeader 
        slug={slug}
        thumbnail={thumbnail}
        title={title}
        shortDescription={shortDescription}
        techStack={techStack}
      />
      <ProjectDetailLink 
        codeDisclaimer={codeDisclaimer}
        linkCode={linkCode}
        linkWeb={linkWeb}
      />
      <ProjectDetailDescription 
        {...description}
      />
      <ProjectDetailInterface
        slug={slug}
        interfaces={interfaces}
      />
    </section>
  )
}

export default ProjectDetail