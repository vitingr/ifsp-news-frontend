import type { AnchorHTMLAttributes } from 'react'
import type React from 'react'

export interface GetButtonElementTypeProps {
  as?: keyof React.JSX.IntrinsicElements
  href?: string
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target']
}
