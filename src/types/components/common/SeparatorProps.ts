import BaseComponentProps from '@/types/components/BaseComponentProps'

export default interface SeparatorProps extends BaseComponentProps {
  theme?: 'light' | 'dark'
  width: String
  height?: String
}