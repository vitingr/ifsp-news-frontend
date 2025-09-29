'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import { Loading } from '@/components/common/Loading'
import { useGetAllCategories } from '@/hooks/swr/useGetAllCategories'
import { useUserSession } from '@/hooks/useUserSession'
import { triggerCustomEvent } from '@/types/utils/customEvents/triggerCustomEvent'

import { Pencil } from '../icons/Pencil'
import { Tag } from '../icons/Tag'
import { TrashCan } from '../icons/TrashCan'
import { NoResults } from './NoResults'
import type { CreatedCategoriesProps } from './types'

export const Createdcategories: FC<CreatedCategoriesProps> = () => {
  const { categories, isLoading } = useGetAllCategories()

  const session = useUserSession()

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
        {!isLoading ? (
          <>
            {categories?.length > 0 ? (
              <div className="flex w-full flex-col gap-2 rounded-sm border border-neutral-200 bg-white p-6">
                {categories.map((category, index: number) => (
                  <div
                    className="flex w-full items-center gap-3 border-b border-neutral-200 pb-4 lg:justify-between"
                    key={`${category.title}-${index}`}
                  >
                    <div className="flex w-full flex-1 flex-col justify-center">
                      <p className="font-bold">{category.title}</p>
                      <p className="text-sm !text-neutral-500">
                        {category.description}
                      </p>
                      <p className="mt-2 w-fit bg-blue-50 px-2 py-1 text-xs !text-blue-400">
                        Categoria Publicada
                      </p>
                    </div>
                    <div className="flex w-auto items-center gap-3 px-16">
                      <p className="text-center text-xs !text-neutral-500">
                        Created by
                      </p>
                      <figure className="h-9 w-9 rounded-full">
                        <Image
                          src={
                            session?.user?.avatarUrl ||
                            'https://plus.unsplash.com/premium_photo-1672201106204-58e9af7a2888?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhZGllbnQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww'
                          }
                          alt="profile image"
                          className="h-9 w-9 rounded-full object-cover transition-all duration-300 hover:brightness-105"
                          height={80}
                          width={80}
                        />
                      </figure>
                    </div>
                    <div className="flex w-auto items-center justify-end gap-4">
                      <Link
                        aria-label="Edit Category"
                        className="flex cursor-pointer items-center justify-center rounded-md bg-neutral-200 p-2.5 transition-all duration-300 hover:brightness-105"
                        href={`/admin/categorias/${category.slug}`}
                      >
                        <Pencil className="h-4 w-4 !text-neutral-500" />
                      </Link>
                      <button
                        onClick={() =>
                          triggerCustomEvent({
                            eventName: 'delete-category',
                            data: {
                              action: 'open',
                              data: {
                                id: category.id
                              }
                            }
                          })
                        }
                        aria-label="Delete Category"
                        className="flex cursor-pointer items-center justify-center rounded-md bg-neutral-200 p-2.5 transition-all duration-300 hover:brightness-105"
                      >
                        <TrashCan className="h-4 w-4 !text-neutral-500" />
                      </button>
                    </div>
                  </div>
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
