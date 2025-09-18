import Image from 'next/image'
import type { FC } from 'react'

import type { CardProps } from './types'

export const Card: FC<CardProps> = async ({ copy }) => {
  return (
    <div className="flex w-full cursor-pointer items-center gap-4 overflow-hidden lg:gap-8">
      <figure className="group h-[125px] w-[125px] overflow-hidden rounded-xl sm:h-[150px] sm:w-[150px] lg:h-[170px] lg:w-[170px]">
        <Image
          alt={copy.image.alt}
          className="h-[125px] w-[125px] rounded-xl object-cover transition-all duration-300 group-hover:scale-[1.01] sm:h-[150px] sm:w-[150px] lg:h-[170px] lg:w-[170px]"
          height={1080}
          src={copy.image.src}
          width={1080}
        />
      </figure>
      <article className="flex w-full flex-1 flex-col gap-3">
        <h3 className="text-lg font-semibold lg:text-xl">{copy.title}</h3>
        <div className="flex w-full items-center gap-2">
          <p className="text-sm font-medium">{copy.type}</p>
          <p className="text-sm text-neutral-500">{copy.date}</p>
        </div>
      </article>
    </div>
  )
}
