import type { NextPage } from 'next'

import { supabase } from '@/instances/supabase'
import { getMetaData } from '@/utils/seo/getMetaData'

import { Createdcategories } from './components/CreatedCategories'

export async function generateMetadata() {
  return getMetaData({
    title: 'IFSP News | Categorias publicadas',
    description: '',
    image: '',
    url: '/categorias'
  })
}

const Page: NextPage = async () => {
  const { data } = await supabase.categories.getAllCategories({})

  return (
    <main>
      <Createdcategories categories={data} />
    </main>
  )
}

export default Page
