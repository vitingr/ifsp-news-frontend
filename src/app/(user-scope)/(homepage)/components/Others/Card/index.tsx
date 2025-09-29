import Image from 'next/image'
import type { FC } from 'react'

import type { CardProps } from './types'

export const Card: FC<CardProps> = ({ copy }) => {
  return (
    <div className="flex w-full flex-col gap-4">
      <figure className="group h-[230px] w-full cursor-pointer overflow-hidden rounded-sm transition-all duration-300 hover:shadow">
        <Image
          alt={copy.thumb.alt}
          className="h-[230px] w-full rounded-sm object-cover transition-all duration-300 group-hover:scale-[1.01]"
          height={480}
          src={copy.thumb.src}
          width={720}
        />
      </figure>
      <article className="flex flex-col gap-2">
        <h3 className="text-lg !font-semibold">{copy.title}</h3>
        <p className="flex items-center gap-2 text-sm text-neutral-500">
          <span className="text-sm font-medium text-neutral-700">
            {copy.label}
          </span>{' '}
          {copy.date}
        </p>
      </article>
    </div>
  )
}
