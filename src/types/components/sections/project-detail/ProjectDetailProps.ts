import BaseComponentProps from '@/types/components/BaseComponentProps'
import FeaturedProject from '@/types/data/FeaturedProjects'

export default interface ProjectDetailProps extends BaseComponentProps {
  currentProject: FeaturedProject
}