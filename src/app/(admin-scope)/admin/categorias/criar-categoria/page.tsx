import type { NextPage } from 'next'

import { getMetaData } from '@/utils/seo/getMetaData'

import { CreateCategoryForm } from './components/Form'

export async function generateMetadata() {
  return getMetaData({
    title: 'IFSP News | Criar categoria',
    description: '',
    image: '',
    url: '/categorias/criar-categoria'
  })
}

const Page: NextPage = async () => {
  return (
    <main>
      <CreateCategoryForm />
    </main>
  )
}

export default Page
