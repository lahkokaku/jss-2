import { FC } from 'react'
import components from '@/data/components'
import ProjectDetailHeaderProps from '@/types/components/sections/project-detail/ProjectDetailHeaderProps'

const {
  Separator,
  HeadingOne,
  TextHighlight
} = components

const ProjectDetailHeader: FC<ProjectDetailHeaderProps> = ({slug, thumbnail, title, shortDescription}) => {
  return (
    <div className='flex sm:flex-row flex-col sm:gap-10 gap-5 fade-in-up'>
        <div className='aspect-[16/7] rounded-xl flex-2'>
          <img
            src={`/assets/images/${slug}/${thumbnail}`}
            alt='title'
            className='object-cover rounded-[inherit]'
          />
        </div>
        <div className='flex-3'>
          <Separator className='mb-3' width='w-1/6' />
          <HeadingOne className='sm:mb-5 mb-2'>
            <TextHighlight>
              {title}
            </TextHighlight>
          </HeadingOne>
          <div className='sm:text-lg'>
            {shortDescription}
          </div>
        </div>
      </div>
  )
}

export default ProjectDetailHeader