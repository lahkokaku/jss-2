import { FC } from 'react'
import components from '@/data/components'

const { Separator, TextHighlight, Button } = components

const Hero: FC = () => {
  return (
    <section className='container flex h-screen flex-col justify-center fade-in-up'>
      <Separator width='w-1/6' className='sm:mb-5 mb-3' />
      <div className='text-lg sm:mb-2 mb-1'>Greetings! My name is</div>
      <div className='text-2xl sm:mb-2 mb-1'>
        <span className='sm:text-4xl text-3xl font-bold'>
          Jose Stephen Satrya
        </span>
        &nbsp;&nbsp;👋
      </div>
      <div className='sm:text-2xl text-xl sm:mb-3 mb-1'>
        <TextHighlight className='font-bold sm:text-3xl text-2xl'>
          Software Engineer
        </TextHighlight>
      </div>
      <div className='sm:text-lg mb-4 md:w-3/4'>
        I am a Computer Science fresh graduate from BINUS University. Currently,
        I am undergoing an internship as a Software Engineer at Blibli.com. I am
        passionate to explore more about software engineering, especially{' '}
        <TextHighlight className='sm:font-bold sm:text-2xl font-extrabold'>
          Web Interfaces
        </TextHighlight>{' '}
        and{' '}
        <TextHighlight className='sm:font-bold sm:text-2xl font-extrabold'>
          Backend Services
        </TextHighlight>
        .
      </div>
      <div className='flex gap-3'>
        <Button prominence='secondary'>Projects</Button>
        <a
          href='/Resume_Jose Stephen Satrya.pdf'
          target='_blank'
          rel='noreferrer'
        >
          <Button>Resume</Button>
        </a>
      </div>
    </section>
  )
}

export default Hero
