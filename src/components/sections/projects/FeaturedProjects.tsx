import { FC } from 'react'
import components from '@/data/components'

const { Separator, HeadingOne, TextHighlight } = components

const FeaturedProjects: FC = () => {
  return (
    <section className='container sm:pt-32 pt-24'>
      <div className='mb-5 fade-in-up'>
        <Separator className='mb-3' width={'w-1/6'} />
        <HeadingOne>
          <TextHighlight>Featured Projects</TextHighlight>
        </HeadingOne>
      </div>
    </section>
  )
}

export default FeaturedProjects
