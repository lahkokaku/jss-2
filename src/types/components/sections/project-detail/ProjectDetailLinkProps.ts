import BaseComponentProps from '@/types/components/BaseComponentProps'

export default interface ProjectDetailDescriptionProps extends BaseComponentProps {
  codeDisclaimer: boolean,
  linkCode: [
    {
      type: string,
      link: string
    }
  ] | null,
  linkWeb: string | null
}