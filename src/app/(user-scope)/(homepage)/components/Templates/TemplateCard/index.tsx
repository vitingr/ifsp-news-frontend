import Image from 'next/image'
import type { FC } from 'react'

import type { TemplateCardProps } from './types'

export const TemplateCard: FC<TemplateCardProps> = ({ copy }) => {
  return (
    <div className="flex w-full cursor-pointer flex-col items-center gap-4 overflow-hidden">
      <figure className="group h-auto max-h-[380px] w-full overflow-hidden rounded-xl transition-all duration-300 hover:shadow-md">
        <Image
          alt={copy.image.alt}
          className="h-auto max-h-[380px] w-full rounded-xl object-cover transition-all duration-300 group-hover:scale-[1.01]"
          height={1080}
          src={copy.image.src}
          width={1080}
        />
      </figure>
      <article className="flex w-full flex-1 flex-col gap-3">
        <h3 className="text-xl !font-semibold">{copy.title}</h3>
        <div className="flex w-full items-center gap-2">
          <p className="text-sm font-medium">{copy.type}</p>
          <p className="text-sm !text-neutral-500">{copy.author}</p>
        </div>
      </article>
    </div>
  )
}
