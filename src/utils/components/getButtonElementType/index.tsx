import Link from 'next/link'
import type React from 'react'

import type { GetButtonElementTypeProps } from './types'

export const getButtonElementType = ({
  as = 'button',
  href,
  target
}: GetButtonElementTypeProps):
  | keyof React.JSX.IntrinsicElements
  | typeof Link => {
  //@ts-ignore
  if (!href) return as

  const isExternal = /^https?:\/\//.test(href)
  if (isExternal || target === '_blank') return 'a'

  return Link
}
