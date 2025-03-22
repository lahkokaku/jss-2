import ProjectDetailLinkProps from '@/types/components/sections/project-detail/ProjectDetailLinkProps'
import { FC } from 'react'
import components from '@/data/components'
import { RiLinksFill } from '@remixicon/react'

const { Card, HeadingThree, LinkText } = components

const ProjectDetailLink: FC<ProjectDetailLinkProps> = ({
  codeDisclaimer,
  linkCode,
  linkWeb
}) => {
  return (
    <Card className='p-5 sm:mb-8 mb-4 fade-in-up'>
      <div className='flex gap-2 items-center mb-3'>
        <RiLinksFill className='text-secondary-light' />
        <HeadingThree>Links</HeadingThree>
      </div>
      {linkCode && (
        <div className='mb-2'>
          <div className='text-secondary-light text-lg font-bold'>Code Link</div>
          {
            linkCode.map((({type, link}) => (
              <div className='sm:text-base text-sm'>{type}: <LinkText to={link}>{link}</LinkText></div>
            )))
          }
        </div>
      )}
      {linkWeb && (
        <div className='mb-2'>
          <div className='text-secondary-light text-lg font-bold'>Web Link</div>
          <div className='sm:text-base text-sm'><LinkText to={linkWeb}>{linkWeb}</LinkText></div>
        </div>
      )}
      {codeDisclaimer && (
          <div className='text-red-400 text-sm'>The current website may not represent the state I worked on as it is regulary updated</div>
      )}
    </Card>
  )
}

export default ProjectDetailLink
