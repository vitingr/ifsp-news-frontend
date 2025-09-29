import Link from 'next/link'
import type { FC } from 'react'

import { triggerCustomEvent } from '@/types/utils/customEvents/triggerCustomEvent'

import { Pencil } from '../../icons/Pencil'
import { TrashCan } from '../../icons/TrashCan'
import type { CategoryCardProps } from './types'

export const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="flex w-full items-center gap-3 border-b border-neutral-200 pb-4 lg:justify-between">
      <div className="flex w-full flex-1 flex-col justify-center">
        <p className="font-bold">{category.title}</p>
        <p className="text-sm !text-neutral-500">{category.description}</p>
        <p className="mt-2 w-fit bg-blue-50 px-2 py-1 text-xs !text-blue-400">
          Categoria Publicada
        </p>
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
  )
}
