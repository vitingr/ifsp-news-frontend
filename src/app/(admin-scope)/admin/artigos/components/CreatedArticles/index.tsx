import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import type { CreatedArticlesProps } from './types'

export const CreatedArticles: FC<CreatedArticlesProps> = async ({
  articles
}) => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-2x mx-auto flex w-full flex-col gap-8 lg:max-w-7xl">
        <div className="flex w-full items-center gap-4 lg:justify-between">
          <h2 className="mt-2 w-full text-2xl !font-semibold">
            Artigos criados
          </h2>
          <div className="flex w-full items-center justify-end">
            <Link
              className="cursor-pointer rounded-sm bg-neutral-700 px-6 py-2 text-center text-sm !text-white transition-all duration-300 hover:bg-neutral-600"
              href="/admin/artigos/criar-artigo"
            >
              Criar Artigo
            </Link>
          </div>
        </div>
        {articles?.length > 0 ? (
          <div className="flex w-full flex-col gap-4">
            {articles.map((article, index: number) => (
              <Link
                className="flex w-full items-center gap-3 border-b border-neutral-200 pb-4"
                href={`/admin/artigos/${article.slug}`}
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
                  <p className="mt-2 text-xs !text-neutral-400">
                    Criado por {article?.author?.name || 'Getulio Games'}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div>Sem resultados</div>
        )}
      </div>
    </section>
  )
}
