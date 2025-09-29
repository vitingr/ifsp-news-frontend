import type { NextPage } from 'next'

import { getMetaData } from '@/utils/seo/getMetaData'

import { CreatedAuthors } from './components/CreatedAuthors'

export async function generateMetadata() {
  return getMetaData({
    title: 'IFSP News | Autores Cadastrados',
    description: '',
    image: '',
    url: '/autores'
  })
}

const Page: NextPage = async () => {
  return (
    <main>
      <CreatedAuthors />
    </main>
  )
}

export default Page
