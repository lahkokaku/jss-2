import BaseComponentProps from '@/types/components/BaseComponentProps'

export default interface ProjectDetailHeaderProps extends BaseComponentProps {
  slug: string,
  thumbnail: string,
  title: string,
  shortDescription: string,
  techStack: string[]
}