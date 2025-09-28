import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import type { CardProps } from './types'

export const Card: FC<CardProps> = async ({ copy }) => {
  return (
    <Link
      aria-label="Acess article"
      className="flex w-full cursor-pointer items-center gap-4 overflow-hidden lg:gap-8"
      href={`/artigos/${copy.slug}`}
    >
      <figure className="group h-[125px] w-[125px] overflow-hidden rounded-md sm:h-[150px] sm:w-[150px] lg:h-[170px] lg:w-[170px]">
        <Image
          alt={copy.title}
          className="h-[125px] w-[125px] rounded-md object-cover transition-all duration-300 group-hover:scale-[1.01] sm:h-[150px] sm:w-[150px] lg:h-[170px] lg:w-[170px]"
          height={1080}
          src={copy.thumb}
          width={1080}
        />
      </figure>
      <article className="flex w-full flex-1 flex-col gap-3">
        <h3 className="text-lg !font-semibold lg:text-xl">{copy.title}</h3>
        <div className="flex w-full flex-col gap-2">
          <p className="text-sm">{copy.description}</p>
          <p className="text-sm !text-neutral-500">
            {copy.createdAt.toString()}
          </p>
        </div>
      </article>
    </Link>
  )
}
