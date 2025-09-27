'use client'

import Image from 'next/image'
import type { FC } from 'react'

import { Button } from '@/components/toolkit/Button'
import { useGetAllAuthors } from '@/hooks/swr/useGetAllAuthors'
import { triggerCustomEvent } from '@/types/utils/customEvents/triggerCustomEvent'

export const CreatedAuthors: FC = () => {
  const { authors } = useGetAllAuthors()

  return (
    <section className="w-full bg-white">
      <div className="max-w-2x mx-auto flex w-full flex-col gap-8 lg:max-w-7xl">
        <div className="flex w-full items-center gap-4 lg:justify-between">
          <h2 className="mt-2 w-full text-2xl !font-semibold">
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
              className="cursor-pointer rounded-sm bg-neutral-700 px-6 py-2 text-center text-sm !text-white transition-all duration-300 hover:bg-neutral-600"
              variant="custom"
            >
              Convidar novo Autor
            </Button>
          </div>
        </div>
        {authors?.length > 0 ? (
          <div className="flex w-full flex-col gap-4">
            {authors.map((author, index: number) => (
              <div
                className="flex w-full rounded-sm bg-white px-5 py-3"
                key={`author-${index}`}
              >
                <figure className="w-auto">
                  <Image alt="" className="" height={80} src="" width={80} />
                </figure>
                <article></article>
              </div>
            ))}
          </div>
        ) : (
          <div>Sem resultados</div>
        )}
      </div>
    </section>
  )
}
