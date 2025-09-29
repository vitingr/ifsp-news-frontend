'use client'

import Image from 'next/image'
import type { FC } from 'react'

import { Loading } from '@/components/common/Loading'
import { Button } from '@/components/toolkit/Button'
import { useGetAllAuthors } from '@/hooks/swr/useGetAllAuthors'
import { triggerCustomEvent } from '@/types/utils/customEvents/triggerCustomEvent'

import { Details } from '../icons/Details'
import { People } from '../icons/People'
import { NoResults } from './NoResults'

export const CreatedAuthors: FC = () => {
  const { authors, isLoading } = useGetAllAuthors()

  return (
    <section className="w-full">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-7xl">
        <div className="flex w-full items-center gap-4 lg:justify-between">
          <h2 className="mt-2 flex w-full items-center gap-3 text-2xl !font-semibold">
            <People className="h-6 w-6" />
            Autores Disponíveis
          </h2>
          <div className="flex w-full items-center justify-end">
            <Button
              onClick={() =>
                triggerCustomEvent({
                  eventName: 'invite-author',
                  data: {
                    action: 'open'
                  }
                })
              }
              className="action-admin-button"
              variant="custom"
            >
              Convidar novo Autor
            </Button>
          </div>
        </div>
        {!isLoading ? (
          <>
            {authors?.length > 0 ? (
              <div className="flex w-full flex-col gap-6 rounded-sm border border-neutral-200 bg-white px-6 py-8">
                {authors.map((author, index: number) => (
                  <div
                    className="flex w-full items-center gap-4 rounded-sm bg-white"
                    key={`author-${index}`}
                  >
                    <figure className="h-12 w-12 rounded-full">
                      <Image
                        alt={author?.name}
                        className="h-12 w-12 rounded-full object-cover"
                        height={80}
                        src={author?.avatarUrl}
                        width={80}
                      />
                    </figure>
                    <div className="w-full flex-1 items-center lg:justify-between">
                      <article className="flex w-full flex-col">
                        <p className="text-sm !font-bold">{author?.name}</p>
                        <p className="text-sm !text-neutral-500">
                          {author?.email}
                        </p>
                      </article>
                    </div>
                    <div className="flex w-fit items-center justify-center">
                      <span className="rounded-sm bg-blue-50 px-4 py-1 text-xs !text-blue-400">
                        {author?.role === 'author' ? 'Autor' : 'Admin'}
                      </span>
                    </div>
                    <div className="flex w-fit items-center justify-center">
                      <span className="rounded-sm bg-emerald-50 px-4 py-1 text-xs !text-emerald-600">
                        Ativo
                      </span>
                    </div>
                    <div className="flex w-fit items-center justify-end px-2">
                      <button className="cursor-pointer rounded-md px-3 py-1.5 transition-all duration-300 hover:bg-neutral-100">
                        <Details className="%text-neutral-600 h-5 w-5" />
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
