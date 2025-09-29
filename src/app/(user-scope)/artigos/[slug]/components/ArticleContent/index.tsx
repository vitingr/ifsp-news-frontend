import Image from 'next/image'
import type { FC } from 'react'

import type { ArticleContentProps } from './types'

export const ArticleContent: FC<ArticleContentProps> = ({ article }) => {
  return (
    <section className="w-full px-4 pb-12 lg:pb-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-3xl lg:gap-12">
        <div
          className="w-full"
          dangerouslySetInnerHTML={{ __html: article.content }}
          data-cid="article-content"
        />
        <article className="flex w-full flex-col gap-4 rounded-sm border border-neutral-200 bg-neutral-100 p-4">
          <div className="flex w-full items-center gap-3">
            <figure className="flex w-auto items-center justify-center">
              <Image
                src={
                  article?.author?.avatarUrl ||
                  'https://plus.unsplash.com/premium_photo-1672201106204-58e9af7a2888?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhZGllbnQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww'
                }
                alt={article?.author?.name || 'Autor do Artigo'}
                className="h-10 w-10 rounded-full object-cover"
                height={80}
                width={80}
              />
            </figure>
            <article>
              <p className="text-sm !font-semibold">
                {article?.author?.name || 'Autor do Artigo'}
              </p>
              <p className="text-xs !text-neutral-500">
                Autor desde setembro de 2025
              </p>
            </article>
          </div>
        </article>
      </div>
    </section>
  )
}
