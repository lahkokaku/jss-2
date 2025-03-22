import ProjectDetailInterfaceProps from '@/types/components/sections/project-detail/ProjectDetailInterfaceProps'
import { FC } from 'react'
import components from '@/data/components'
import { RiImageFill } from '@remixicon/react'

const { Card, HeadingThree } = components

const ProjectDetailInterface: FC<ProjectDetailInterfaceProps> = ({
  slug,
  interfaces
}) => {
  return (
    <Card className='flex flex-col gap-2 p-5 sm:mb-8 mb-4 fade-in-up'>
      <div className='flex gap-2 items-center mb-1'>
        <RiImageFill className='text-secondary-light' />
        <HeadingThree>Interfaces</HeadingThree>
      </div>
      {
        interfaces ?
          <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-3'>
            {
              interfaces.map(({description, link}) => (
                <div key={link}>
                  <div className='sm:text-base text-sm'>{description}</div>
                  <div className='max-h-[350px] overflow-y-auto'>
                    <img src={`/assets/images/${slug}/${link}`} alt={description} />
                  </div>
                </div>
              ))
            }
          </div>
        :
          <div className='sm:text-base text-sm'>Interfaces will be uploaded soon!</div>
      }
    </Card>
  )
}

export default ProjectDetailInterface
