'use client'

import { createElement } from 'react'

import { getButtonElementType } from '@/utils/components/getButtonElementType'

import { Spin } from '../Spin'
import type { ButtonProps } from './types'
import { buttonVariants } from './variance'

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size,
  container,
  className,
  children,
  isLoading,
  disabled,
  icon = null,
  ...props
}) => {
  const spinShouldBeDark =
    variant.includes('dark') ||
    variant.includes('primary') ||
    variant.includes('tertiary')
  const spin = <Spin variant={spinShouldBeDark ? 'dark' : 'light'} />

  return createElement(
    getButtonElementType({ ...props }),
    {
      className: buttonVariants({
        variant,
        size,
        container,
        disabled,
        className,
        isLoading
      }),
      //@ts-ignore
      disabled: isLoading || disabled,
      ...props
    },
    <>
      {isLoading ? spin : icon}
      {children}
    </>
  )
}
