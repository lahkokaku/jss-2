import { FC } from 'react'
import components from '@/data/components'
import { Link } from 'react-router-dom'
import socials from '@/data/social'

const { Separator, TextHighlight, Button, HeadingOne, HeadingTwo } = components

const Hero: FC = () => {
  return (
    <section className='container flex h-screen flex-col justify-center fade-in-up'>
      <Separator width='w-1/6' className='sm:mb-5 mb-3' />
      <div className='text-lg sm:mb-2 mb-1'>Greetings! My name is</div>
      <div className='flex text-2xl sm:mb-2 mb-1'>
        <HeadingOne>Jose Stephen Satrya</HeadingOne>
        &nbsp;&nbsp;👋
      </div>
      <div className='sm:mb-3 mb-1'>
        <HeadingTwo>
          <TextHighlight>Software Engineer</TextHighlight>
        </HeadingTwo>
      </div>
      <div className='sm:text-lg mb-4 md:w-3/4'>
        I am a recent Computer Science graduate from BINUS University. Currently,
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
      <div className='flex gap-3 items-center'>
        <Link to='/projects'>
          <Button prominence='secondary'>Projects</Button>
        </Link>
        <a
          href='/Resume_Jose Stephen Satrya.pdf'
          target='_blank'
          rel='noreferrer'
          className='me-1'
        >
          <Button>Resume</Button>
        </a>
        {socials.map((social, i) => (
          <a
            key={i}
            href={social.link}
            target='_blank'
            rel='noreferrer'
            aria-label={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Hero
