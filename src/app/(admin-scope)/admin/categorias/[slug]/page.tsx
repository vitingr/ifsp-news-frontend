import type { NextPage } from 'next'

import { supabase } from '@/instances/supabase'
import { getMetaData } from '@/utils/seo/getMetaData'

import { EditCategoryForm } from './components/Form'
import type { CategoryDynamicPage } from './types'

export async function generateMetadata() {
  return getMetaData({
    title: 'Criar artigo',
    description: '',
    image: '',
    url: '/categorias/criar-categoria'
  })
}

const Page: NextPage<CategoryDynamicPage> = async ({ params }) => {
  const { slug } = await params

  const { data: category } = await supabase.categories.getCategoryBySlug({
    slug
  })

  return (
    <main>
      <EditCategoryForm category={category} />
    </main>
  )
}

export default Page
