import Social from '@/types/data/Social'
import { RiGithubFill, RiLinkedinFill, RiMailFill } from '@remixicon/react'

const socials: Social[] = [
  {
    name: 'Mail',
    link: 'mailto:jose.satrya@gmail.com',
    icon: (
      <RiMailFill className='hover:text-secondary-light transition-colors' />
    ),
  },
  {
    name: 'GitHub',
    link: 'https://github.com/lahkokaku',
    icon: (
      <RiGithubFill className='hover:text-secondary-light transition-colors' />
    ),
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jose-stephen-502257290/',
    icon: (
      <RiLinkedinFill className='hover:text-secondary-light transition-colors' />
    ),
  },
]

export default socials
