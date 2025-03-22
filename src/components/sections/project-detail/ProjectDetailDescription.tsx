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
    <Card className='p-5 sm:mb-8 mb-4'>
      <div className='flex gap-2 items-center mb-3'>
        <RiInformation2Fill className='text-secondary-light' />
        <HeadingThree>Description</HeadingThree>
      </div>
      <div className='mb-2'>
        <div className='text-secondary-light text-lg font-bold'>
          Introduction
        </div>
        <div className='sm:text-base text-sm'>{parse(introduction)}</div>
      </div>
      {role && (
        <div className='mb-2'>
          <div className='text-secondary-light text-lg font-bold'>Role</div>
          <div className='sm:text-base text-sm'>{parse(role)}</div>
        </div>
      )}
    </Card>
  )
}

export default ProjectDetailDescription
