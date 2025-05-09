import socials from '@/data/social'
import { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className='flex justify-between items-end container md:py-8 py-6 backdrop-blur-lg'>
      <div className='flex flex-col'>
        <div className='font-extrabold sm:text-3xl text-xl mb-2'>Let's talk!</div>
        <div className='flex items-center gap-3' id='contact'>
          {
            socials.map((social, i) => (
              <a
                key={i}
                href={social.link}
                target='_blank'
                rel='noreferrer'
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))
          }
        </div>
      </div>
      <div className='md:text-base text-sm'>
        Made with ❤️ by Jose.
      </div>
    </footer>
  )
}

export default Footer
