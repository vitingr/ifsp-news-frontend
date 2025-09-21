import type { NextPage } from 'next'

import { supabase } from '@/instances/supabase'
import { getMetaData } from '@/utils/seo/getMetaData'

import { EditArticleForm } from './components/Form'
import type { ArticleDynamicPage } from './types'

export async function generateMetadata() {
  return getMetaData({
    title: 'Criar artigo',
    description: '',
    image: '',
    url: '/admin/artigos/editar-artigo'
  })
}

const Page: NextPage<ArticleDynamicPage> = async ({ params }) => {
  const { slug } = await params

  const { data: article } = await supabase.articles.getArticleBySlug({ slug })

  const { data } = await supabase.categories.getAllCategories({})

  return (
    <main>
      <EditArticleForm article={article} availableCategories={data} />
    </main>
  )
}

export default Page
