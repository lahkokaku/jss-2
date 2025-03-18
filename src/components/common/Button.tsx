import { ButtonProps } from '@/types/components/common/ButtonProps'
import clsx from 'clsx'
import { ButtonHTMLAttributes, FC } from 'react'

const ProminenceEnum = {
  primary:
    'bg-gradient-light text-dark hover:bg-gradient-dark hover:text-light',
  secondary: 'bg-glass hover:bg-glass-lighter hover:text-light',
  tertiary: 'text-light hover:bg-glass',
}
const SizeEnum = {
  small: 'px-2 py-1 sm:text-md text-sm',
  medium: 'px-3 py-2 sm:text-lg text-md',
  large: 'px-4 py-2 sm:text-xl text-lg',
}

const Button: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  prominence,
  size,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'duration-300 ease-in-out transition',
        'rounded-xl font-semibold',
        ProminenceEnum[prominence ?? 'primary'],
        SizeEnum[size ?? 'medium'],
        'cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
