import { FC } from 'react'
import components from '@/data/components'
import { featuredProjects } from '@/data/featuredProjects'

const { Separator, HeadingOne, TextHighlight, FeaturedProjectCard } = components

const FeaturedProjects: FC = () => {
  return (
    <section className='container sm:pt-32 pt-24'>
      <div className='mb-5 fade-in-up'>
        <Separator className='mb-3' width={'w-1/6'} />
        <HeadingOne>
          <TextHighlight>Featured Projects</TextHighlight>
        </HeadingOne>
      </div>
      <div className='grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-4'>
        {featuredProjects.map((featuredProject, index) => {
          const { title, slug, thumbnail, shortDescription, techStack } = featuredProject
          return (
            <FeaturedProjectCard
              index={index}
              key={slug}
              title={title}
              slug={slug}
              thumbnail={thumbnail}
              shortDescription={shortDescription}
              techStack={techStack}
            />
          )
        })}
      </div>
    </section>
  )
}

export default FeaturedProjects
