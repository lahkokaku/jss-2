import ProjectDetailDescriptionProps from '@/types/components/sections/project-detail/ProjectDetailDescriptionProps'
import { FC } from 'react'
import components from '@/data/components'
import { RiInformation2Fill } from '@remixicon/react'
import parse from 'html-react-parser'

const { Card, HeadingThree } = components

const ProjectDetailDescription: FC<ProjectDetailDescriptionProps> = ({
  introduction,
  role,
}) => {
  return (
    <Card className='flex flex-col gap-2 p-5 sm:mb-8 mb-4 fade-in-up'>
      <div className='flex gap-2 items-center mb-1'>
        <RiInformation2Fill className='text-secondary-light' />
        <HeadingThree>Description</HeadingThree>
      </div>
      <div>
        <div className='text-secondary-light text-lg font-bold'>
          Introduction
        </div>
        <div className='sm:text-base text-sm'>{parse(introduction)}</div>
      </div>
      {role && (
        <div>
          <div className='text-secondary-light text-lg font-bold'>Role</div>
          <div className='sm:text-base text-sm'>{parse(role)}</div>
        </div>
      )}
    </Card>
  )
}

export default ProjectDetailDescription
