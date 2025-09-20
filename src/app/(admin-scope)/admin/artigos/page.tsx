import type { NextPage } from 'next'

import { supabase } from '@/instances/supabase'
import { getMetaData } from '@/utils/seo/getMetaData'

import { CreatedArticles } from './components/CreatedArticles'

export async function generateMetadata() {
  return getMetaData({
    title: 'Criar artigo',
    description: '',
    image: '',
    url: '/artigos'
  })
}

const Page: NextPage = async () => {
  const { data } = await supabase.articles.getAllArticles({})

  return (
    <main>
      <CreatedArticles articles={data} />
    </main>
  )
}

export default Page
