import Link from 'next/link'
import { Fragment, createElement } from 'react'
import { GoChevronRight } from 'react-icons/go'
import { IoHomeOutline } from 'react-icons/io5'

import type { BreadcrumbProps } from './types'
import { breadcrumbVariants } from './variance'

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  variant,
  className,
  items = [],
  disableAnchor,
  disableLineWrap,
  ...props
}) => {
  return (
    <div
      className={breadcrumbVariants({
        variant,
        className
      })}
      {...props}
      title={items.map(item => item.name).join(' > ')}
    >
      <Link className="rounded-sm p-0.5" href="/me">
        <IoHomeOutline className="text-neutral-600" />
      </Link>
      {items.map((item, index) => (
        <Fragment key={`${item.name}-${index}`}>
          <GoChevronRight fill="#525252" width={12} />
          {createElement(
            item.href && !disableAnchor ? Link : 'p',
            {
              href: item.href || '/',
              className: `w-fit ${disableLineWrap ? 'flex-1' : ''} font-light text-neutral-600 overflow-hidden text-ellipsis whitespace-nowrap text-sm ${item.href ? 'hover:underline' : ''}`
            },
            item.name
          )}
        </Fragment>
      ))}
    </div>
  )
}
