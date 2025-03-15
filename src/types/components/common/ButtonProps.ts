import BaseComponentProps from '@/types/components/BaseComponentProps'

export interface ButtonProps extends BaseComponentProps {
  prominence?: 'primary' | 'secondary' | 'tertiary'
  size?: 'large' | 'medium' | 'small'
}