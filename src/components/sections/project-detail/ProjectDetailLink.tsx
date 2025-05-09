import ProjectDetailLinkProps from '@/types/components/sections/project-detail/ProjectDetailLinkProps'
import { FC } from 'react'
import components from '@/data/components'
import { RiLinksFill } from '@remixicon/react'

const { Card, HeadingThree } = components

const ProjectDetailLink: FC<ProjectDetailLinkProps> = ({
  codeDisclaimer,
  linkCode,
  linkWeb,
}) => {
  return (
    <Card className='flex flex-col gap-2 p-5 sm:mb-8 mb-4 fade-in-up'>
      <div className='flex gap-2 items-center mb-1'>
        <RiLinksFill className='text-secondary-light' />
        <HeadingThree>Links</HeadingThree>
      </div>
      {linkCode && (
        <div>
          <div className='text-secondary-light text-lg font-bold'>
            Code Link
          </div>
          {linkCode.map(({ type, link }) => (
            <div key={link} className='sm:text-base text-sm'>
              {type}:{' '}
              <a
                href={link}
                target='_blank'
                rel='noreferrer'
                aria-label={type}
                className='text-secondary-light'
              >
                {link}
              </a>
            </div>
          ))}
        </div>
      )}
      {linkWeb && (
        <div>
          <div className='text-secondary-light text-lg font-bold'>Web Link</div>
          <div className='sm:text-base text-sm'>
            <a
              href={linkWeb}
              target='_blank'
              rel='noreferrer'
              aria-label='Link to Website'
              className='text-secondary-light'
            >
              {linkWeb}
            </a>
          </div>
        </div>
      )}
      {codeDisclaimer && (
        <div className='text-sm'>
          The current website may not represent the state I worked on as it is
          regulary updated
        </div>
      )}
    </Card>
  )
}

export default ProjectDetailLink
