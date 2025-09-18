import type { VariantProps } from 'class-variance-authority'
import type { AnchorHTMLAttributes, JSX, PropsWithChildren } from 'react'

import type { buttonVariants } from './variance'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  as?: keyof JSX.IntrinsicElements
  href?: string
  icon?: JSX.Element
  isLoading?: boolean
  prefetch?: boolean
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target']
}

export interface WrapperProps
  extends PropsWithChildren,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {}
