'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import { Loading } from '@/components/common/Loading'
import { useGetAllArticles } from '@/hooks/swr/useGetAllArticles'
import { triggerCustomEvent } from '@/types/utils/customEvents/triggerCustomEvent'

import { News } from '../icons/News'
import { Pencil } from '../icons/Pencil'
import { TrashCan } from '../icons/TrashCan'
import { NoResults } from './NoResults'
import type { CreatedArticlesProps } from './types'

export const CreatedArticles: FC<CreatedArticlesProps> = () => {
  const { articles, isLoading } = useGetAllArticles()

  return (
    <section className="w-full">
      <div className="max-w-2x mx-auto flex w-full flex-col gap-8 lg:max-w-7xl">
        <div className="mt-4 flex w-full items-center gap-4 border-b border-neutral-200 pb-8 lg:justify-between">
          <article className="flex flex-col gap-2">
            <h2 className="mt-2 flex w-full items-center gap-3 text-2xl !font-semibold">
              <News />
              Artigos criados
            </h2>
            <p className="text-sm !text-neutral-500">
              Os artigos são postagens que podem ser descobertas e lidas pelos
              usuários
            </p>
          </article>
          <div className="flex w-full flex-1 items-center justify-end">
            <Link
              className="action-admin-button"
              href="/admin/artigos/criar-artigo"
            >
              Criar Artigo
            </Link>
          </div>
        </div>
        {!isLoading ? (
          <>
            {articles?.length > 0 ? (
              <div className="flex w-full flex-col gap-4 rounded-sm border border-neutral-200 bg-white p-6">
                {articles.map((article, index: number) => (
                  <Link
                    className="flex w-full items-center gap-3 border-b border-neutral-200 pb-4 lg:justify-between"
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
                        Criado por {article?.author?.name}
                      </p>
                    </article>
                    <div className="flex w-auto items-center gap-3 px-16">
                      <p className="text-center text-xs !text-neutral-500">
                        Created by
                      </p>
                      <figure className="h-9 w-9 rounded-full">
                        <Image
                          src={
                            article.author?.avatarUrl ||
                            'https://plus.unsplash.com/premium_photo-1672201106204-58e9af7a2888?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhZGllbnQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww'
                          }
                          alt="profile image"
                          className="h-9 w-9 rounded-full object-cover transition-all duration-300 hover:brightness-105"
                          height={80}
                          width={80}
                        />
                      </figure>
                    </div>
                    <div className="relative z-[9999] flex w-auto items-center justify-end gap-4">
                      <button
                        aria-label="Edit Category"
                        className="flex cursor-pointer items-center justify-center rounded-md bg-neutral-200 p-2.5 transition-all duration-300 hover:brightness-105"
                      >
                        <Pencil className="h-4 w-4 !text-neutral-500" />
                      </button>
                      <button
                        onClick={() =>
                          triggerCustomEvent({
                            eventName: 'delete-article',
                            data: {
                              action: 'open',
                              data: {
                                id: article.id
                              }
                            }
                          })
                        }
                        aria-label="Delete Category"
                        className="relative z-[99999] flex cursor-pointer items-center justify-center rounded-md bg-neutral-200 p-2.5 transition-all duration-300 hover:brightness-105"
                      >
                        <TrashCan className="h-4 w-4 !text-neutral-500" />
                      </button>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <NoResults />
            )}
          </>
        ) : (
          <div className="mt-8 flex items-center justify-center">
            <Loading />
          </div>
        )}
      </div>
    </section>
  )
}
