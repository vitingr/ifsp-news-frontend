import type { NextPage } from 'next'

import { getMetaData } from '@/utils/seo/getMetaData'

export async function generateMetadata() {
  return getMetaData({
    title: 'Criar artigo',
    description: '',
    image: '',
    url: '/categorias/criar-categoria'
  })
}

const Page: NextPage = async () => {
  return <main></main>
}

export default Page
