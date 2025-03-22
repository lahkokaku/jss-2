import FeaturedProjectCardProps from '@/types/components/sections/projects/FeaturedProjectCardProps'
import { FC } from 'react'
import components from '@/data/components'

const { Card, HeadingThree, Badge, LinkText } = components

const FeaturedProjectCard: FC<FeaturedProjectCardProps> = ({
  index,
  title,
  slug,
  thumbnail,
  shortDescription,
  techStack,
}) => {
  return (
    <Card className='fade-in-up'>
      <div className='aspect-[16/7] rounded-t-xl'>
        <img
          src={`/assets/images/${slug}/${thumbnail}`}
          alt='title'
          className='object-cover rounded-t-xl'
          loading={index < 2 ? 'eager' : 'lazy'}
        />
      </div>
      <div className='p-4'>
        <HeadingThree className='mb-1'>{title}</HeadingThree>
        <div className='mb-4'>{shortDescription}</div>
        <div className='mb-4'>
          {techStack.map((item, i) => (
            <Badge key={i} className='me-1 mb-1'>
              {item}
            </Badge>
          ))}
        </div>
        <div className='flex justify-end'>
          <LinkText to={`/projects/${slug}`}>Read More &gt;</LinkText>
        </div>
      </div>
    </Card>
  )
}

export default FeaturedProjectCard
