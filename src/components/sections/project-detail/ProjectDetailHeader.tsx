import { FC } from 'react'
import components from '@/data/components'
import ProjectDetailHeaderProps from '@/types/components/sections/project-detail/ProjectDetailHeaderProps'

const { Separator, HeadingOne, TextHighlight, Badge } = components

const ProjectDetailHeader: FC<ProjectDetailHeaderProps> = ({
  slug,
  thumbnail,
  title,
  shortDescription,
  techStack,
}) => {
  return (
    <div className='flex sm:flex-row flex-col sm:gap-10 gap-4 fade-in-up sm:mb-8 mb-4'>
      <div className='aspect-[16/7] rounded-xl flex-1 sm:mb-0 mb-2'>
        <img
          src={`/assets/images/${slug}/${thumbnail}`}
          alt='title'
          className='object-cover rounded-[inherit]'
        />
      </div>
      <div className='flex-1'>
        <Separator className='mb-3' width='w-1/6' />
        <HeadingOne className='sm:mb-5 mb-2'>
          <TextHighlight>{title}</TextHighlight>
        </HeadingOne>
        <div className='sm:text-lg sm:mb-3 mb-1'>{shortDescription}</div>
        <div>
          {techStack.map((tech) => (
            <Badge key={tech} className='me-1 mb-1'>
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailHeader
