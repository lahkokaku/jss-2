import BaseComponentProps from '@/types/components/BaseComponentProps'

export default interface FeaturedProjectCardProps extends BaseComponentProps {
  index: number,
  title: string,
  slug: string,
  thumbnail: string,
  shortDescription: string,
  techStack: string[]
}