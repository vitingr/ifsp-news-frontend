import Image from 'next/image'
import type { FC } from 'react'

import type { SubFeaturedArticleCardProps } from './types'

export const SubFeaturedArticleCard: FC<SubFeaturedArticleCardProps> = ({
  copy
}) => {
  return (
    <li className="flex w-full items-center gap-3 lg:justify-between">
      <figure className="h-full max-h-16 w-full max-w-20 rounded-md">
        <Image
          alt={copy.title}
          className="h-full rounded-md object-cover"
          height={720}
          src={copy.thumb}
          width={1080}
        />
      </figure>
      <article className="flex w-full flex-col gap-1">
        <h3 className="text-lg !font-medium">{copy.title}</h3>
        <p className="text-sm !text-neutral-500">
          Publicado em 11 de setembro de 2025
        </p>
      </article>
    </li>
  )
}
