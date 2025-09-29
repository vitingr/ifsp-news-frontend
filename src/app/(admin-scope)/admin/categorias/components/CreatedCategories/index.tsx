'use client'

import Link from 'next/link'
import { type FC, useMemo, useState } from 'react'

import { GlassMagnifying } from '@/assets/common/GlassMagnifying'
import { Loading } from '@/components/common/Loading'
import { useGetAllCategories } from '@/hooks/swr/useGetAllCategories'
import { useDebounce } from '@/hooks/useDebounce'

import { Tag } from '../icons/Tag'
import { CategoryCard } from './CategoryCard'
import { NoResults } from './NoResults'
import type { CreatedCategoriesProps } from './types'

export const Createdcategories: FC<CreatedCategoriesProps> = () => {
  const { categories, isLoading } = useGetAllCategories()

  const [searchTerm, setSearchTerm] = useState<string>('')

  const debouncedSearch = useDebounce(searchTerm, 300)

  const filteredCategories = useMemo(() => {
    if (!categories) return []

    const lowerSearch = debouncedSearch.toLowerCase()

    return categories.filter(
      article =>
        article.title.toLowerCase().includes(lowerSearch) ||
        article.description.toLowerCase().includes(lowerSearch) ||
        article?.slug?.toLowerCase().includes(lowerSearch)
    )
  }, [categories, debouncedSearch])

  return (
    <section className="w-full">
      <div className="max-w-2x mx-auto flex w-full flex-col gap-8 lg:max-w-7xl">
        <div className="mt-4 flex w-full items-center gap-4 border-b border-neutral-200 pb-8 lg:justify-between">
          <article className="flex flex-col gap-2">
            <h2 className="mt-2 flex w-full items-center gap-3 text-2xl !font-semibold">
              <Tag />
              Categorias Criadas
            </h2>
            <p className="text-sm !text-neutral-500">
              As categorias tem o propósito de facilitar a filtragem e para que
              os usuários encontrem o que desejam mais rapidamente
            </p>
          </article>
          <div className="flex w-full flex-1 items-center justify-end">
            <Link
              className="action-admin-button"
              href="/admin/categorias/criar-categoria"
            >
              Criar Categoria
            </Link>
          </div>
        </div>
        <div className="flex w-full max-w-xs items-center rounded-sm border border-neutral-200 bg-white px-3 py-2">
          <GlassMagnifying className="h-4 w-4 text-neutral-500" />
          <input
            className="w-full flex-1 bg-white px-2 text-sm text-neutral-500 outline-none placeholder:text-neutral-400"
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Buscar categorias"
            type="text"
            value={searchTerm}
          />
        </div>
        {!isLoading ? (
          <>
            {filteredCategories?.length > 0 ? (
              <div className="flex w-full flex-col gap-2 rounded-sm border border-neutral-200 bg-white p-6">
                {categories.map((category, index: number) => (
                  <CategoryCard
                    category={category}
                    key={`${category.title}-${index}`}
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
