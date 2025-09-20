import Image from 'next/image'
import type { FC } from 'react'

import type { CreatedArticlesProps } from './types'

export const CreatedArticles: FC<CreatedArticlesProps> = async ({
  articles
}) => {
  return (
    <section className="flex w-full flex-col gap-4">
      {articles?.length > 0 ? (
        <div className="flex w-full flex-col gap-4">
          {articles.map((article, index: number) => (
            <div
              className="flex w-full items-center gap-3 border-b border-slate-200 pb-4"
              key={`${article.title}-${index}`}
            >
              <figure className="aspect-video w-full max-w-[160px]">
                <Image
                  alt={article.title}
                  className="aspect-video rounded-sm object-cover"
                  height={1080}
                  src={article.thumb}
                  width={1920}
                />
              </figure>
              <article className="flex w-full flex-1 flex-col">
                <p className="font-bold">{article.title}</p>
                <p className="text-sm !text-neutral-500">
                  {article.description}
                </p>
              </article>
            </div>
          ))}
        </div>
      ) : (
        <div>Sem resultados</div>
      )}
    </section>
  )
}
