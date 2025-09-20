import type { NextPage } from 'next'

import { getMetaData } from '@/utils/seo/getMetaData'

import { CreateArticleForm } from './components/Form'
import { supabase } from '@/instances/supabase'

export async function generateMetadata() {
  return getMetaData({
    title: 'Criar artigo',
    description: '',
    image: '',
    url: '/artigos/criar-artigo'
  })
}

const Page: NextPage = async () => {
  const { data } = await supabase.categories.getAllCategories({})

  return (
    <main>
      <CreateArticleForm availableCategories={data} />
    </main>
  )
}

export default Page
