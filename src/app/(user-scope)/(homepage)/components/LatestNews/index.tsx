import type { FC } from 'react'

import { supabase } from '@/instances/supabase'

import { Card } from './Card'

export const LatestNews: FC = async () => {
  const { data } = await supabase.articles.getAllArticles({})

  return (
    <section className="bg-white px-4 py-12 lg:py-20">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-12 lg:max-w-7xl lg:gap-8">
        <article className="flex w-full items-end justify-between gap-4">
          <h2 className="w-full flex-1 text-2xl !font-semibold">
            Artigos mais recentes
          </h2>
          <p className="w-auto text-base">Ver tudo</p>
        </article>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
          {data.map((article, index: number) => (
            <Card copy={article} key={`${article.title}-${index}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
