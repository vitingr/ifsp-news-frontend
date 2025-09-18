import Link from 'next/link'

import type { GetButtonElementTypeProps } from './types'

export const getButtonElementType = ({
  as = 'button',
  href,
  target
}: GetButtonElementTypeProps): keyof JSX.IntrinsicElements | typeof Link => {
  if (!href) return as

  const isExternal = /^https?:\/\//.test(href)
  if (isExternal || target === '_blank') return 'a'

  return Link
}
