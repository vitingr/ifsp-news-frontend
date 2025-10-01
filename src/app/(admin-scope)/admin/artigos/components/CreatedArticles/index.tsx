'use client'

import Link from 'next/link'
import { type FC, useMemo, useState } from 'react'

import { GlassMagnifying } from '@/assets/common/GlassMagnifying'
import { Loading } from '@/components/common/Loading'
import { useGetAllArticles } from '@/hooks/swr/useGetAllArticles'
import { useDebounce } from '@/hooks/useDebounce'

import { News } from '../icons/News'
import { ArticleCard } from './ArticleCard'
import { NoResults } from './NoResults'
import type { CreatedArticlesProps } from './types'

export const CreatedArticles: FC<CreatedArticlesProps> = () => {
  const { articles, isLoading } = useGetAllArticles()
  const [searchTerm, setSearchTerm] = useState<string>('')

  const debouncedSearch = useDebounce(searchTerm, 300)

  const filteredArticles = useMemo(() => {
    if (!articles) return []

    const lowerSearch = debouncedSearch.toLowerCase()

    return articles.filter(
      article =>
        article.title.toLowerCase().includes(lowerSearch) ||
        article.description.toLowerCase().includes(lowerSearch) ||
        article?.author?.name?.toLowerCase().includes(lowerSearch)
    )
  }, [articles, debouncedSearch])

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
        <div className="flex w-full max-w-xs items-center rounded-sm border border-neutral-200 bg-white px-3 py-2">
          <GlassMagnifying className="h-4 w-4 text-neutral-500" />
          <input
            className="w-full flex-1 bg-white px-2 text-sm text-neutral-500 outline-none placeholder:text-neutral-400"
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Buscar artigos"
            type="text"
            value={searchTerm}
          />
        </div>
        {!isLoading ? (
          <>
            {filteredArticles?.length > 0 ? (
              <div className="flex w-full flex-col gap-4 rounded-sm border border-neutral-200 bg-white p-6">
                {filteredArticles.map((article, index: number) => (
                  <ArticleCard
                    article={article}
                    key={`${article.title}-${index}`}
                  />
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
