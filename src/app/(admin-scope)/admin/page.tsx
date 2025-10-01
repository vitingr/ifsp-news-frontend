import type { NextPage } from 'next'

import { getMetaData } from '@/utils/seo/getMetaData'

import { ArticlesDashboard } from './components/ArticlesDashboard'
import { CitiesDashboard } from './components/CitiesDashboard'
import { MostAccessedCategories } from './components/MostAccessedCategories'

export async function generateMetadata() {
  return getMetaData({
    title: 'IFSP News | Painel do Admin',
    description: '',
    image: '',
    url: '/admin'
  })
}

const Page: NextPage = async () => {
  return (
    <main>
      <section className="flex w-full max-w-2xl flex-col gap-8 lg:max-w-7xl">
        <ArticlesDashboard />
        <div className="flex h-auto w-full items-stretch gap-8">
          <MostAccessedCategories />
          <CitiesDashboard />
        </div>
      </section>
    </main>
  )
}

export default Page
