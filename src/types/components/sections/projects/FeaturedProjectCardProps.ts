import BaseComponentProps from '@/types/components/BaseComponentProps'

export default interface FeaturedProjectCardProps extends BaseComponentProps {
  title: string,
  slug: string,
  thumbnail: string,
  shortDescription: string,
  techStack: string[]
}