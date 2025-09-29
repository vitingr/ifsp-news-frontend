import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import { triggerCustomEvent } from '@/types/utils/customEvents/triggerCustomEvent'

import { Pencil } from '../../icons/Pencil'
import { TrashCan } from '../../icons/TrashCan'
import type { ArticleCardProps } from './types'

export const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="flex w-full items-center gap-3 border-b border-neutral-200 pb-4 lg:justify-between">
      <Link
        className="aspect-video w-full max-w-[160px]"
        href={`/admin/artigos/${article.slug}`}
      >
        <Image
          alt={article.title}
          className="aspect-video rounded-sm object-cover"
          height={1080}
          src={article.thumb}
          width={1920}
        />
      </Link>
      <Link
        className="flex w-full flex-1 flex-col"
        href={`/admin/artigos/${article.slug}`}
      >
        <p className="font-bold">{article.title}</p>
        <p className="text-sm !text-neutral-500">{article.description}</p>
        <p className="mt-2 text-xs !text-neutral-400">
          Criado por {article?.author?.name}
        </p>
      </Link>
      {article.articleCategory?.[0]?.categoryId ? (
        <div className="w-auto">
          <span className="rounded-sm border border-orange-600 px-2 py-1 text-[10px] text-orange-600">
            1 categoria
          </span>
        </div>
      ) : null}
      <div className="flex w-auto items-center gap-3 px-16">
        <p className="text-center text-xs !text-neutral-500">Created by</p>
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
      <div className="relative z-20 flex w-auto items-center justify-end gap-4">
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
    </div>
  )
}
