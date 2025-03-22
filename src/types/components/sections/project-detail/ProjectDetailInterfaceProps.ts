import BaseComponentProps from '@/types/components/BaseComponentProps'

export default interface ProjectDetailInterfaceProps extends BaseComponentProps {
  slug: string,
  interfaces: [
    {
      description: string,
      link: string
    }
  ] | null
}