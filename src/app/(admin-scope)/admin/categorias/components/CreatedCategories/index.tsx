import Link from 'next/link'
import type { FC } from 'react'

import type { CreatedCategoriesProps } from './types'

export const Createdcategories: FC<CreatedCategoriesProps> = async ({
  categories
}) => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-2x mx-auto flex w-full flex-col gap-8 lg:max-w-7xl">
        <div className="flex w-full items-center gap-4 lg:justify-between">
          <h2 className="mt-2 w-full text-2xl !font-semibold">
            Categorias criadas
          </h2>
          <div className="flex w-full items-center justify-end">
            <Link
              className="cursor-pointer rounded-sm bg-neutral-700 px-6 py-2 text-center text-sm !text-white transition-all duration-300 hover:bg-neutral-600"
              href="/admin/categorias/criar-categoria"
            >
              Criar Categoria
            </Link>
          </div>
        </div>
        {categories?.length > 0 ? (
          <div className="flex w-full flex-col gap-2">
            {categories.map((category, index: number) => (
              <Link
                className="flex w-full items-center gap-3 border-b border-neutral-200 pb-2"
                href={`/admin/artigos/${category.slug}`}
                key={`${category.title}-${index}`}
              >
                <article className="flex w-full flex-1 flex-col">
                  <p className="font-bold">{category.title}</p>
                  <p className="text-sm !text-neutral-500">
                    {category.description}
                  </p>
                  <p className="mt-2 w-fit bg-blue-50 px-2 py-1 text-xs !text-blue-400">
                    Categoria Publicada
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
