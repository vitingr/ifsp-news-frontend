import type { FC } from 'react'

import { SUB_FEATURED_CARDS_MOCK } from './data'
import { FeaturedArticleCard } from './FeaturedArticleCard'
import { SubFeaturedArticleCard } from './SubFeaturedArticleCard'

export const Header: FC = async () => {
  return (
    <section className="w-full px-4 py-12 lg:py-16 xl:px-0">
      <header className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-7xl lg:flex-row lg:gap-12">
        <FeaturedArticleCard />
        <div className="flex w-full flex-col gap-6">
          <h2 className="text-lg !font-bold lg:text-xl">Veja também</h2>
          <ul className="flex w-full flex-col gap-4">
            {SUB_FEATURED_CARDS_MOCK.map((article, index: number) => (
              <SubFeaturedArticleCard
                copy={article}
                key={`${article.title}-${index}`}
              />
            ))}
          </ul>
        </div>
      </header>
    </section>
  )
}
