import type { AnchorHTMLAttributes } from 'react'

export interface GetButtonElementTypeProps {
  as?: keyof JSX.IntrinsicElements
  href?: string
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target']
}
