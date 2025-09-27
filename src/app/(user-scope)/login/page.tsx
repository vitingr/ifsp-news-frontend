import type { NextPage } from 'next'

import { getMetaData } from '@/utils/seo/getMetaData'

import { Header } from './components/Header'

export async function generateMetadata() {
  return getMetaData({
    title: 'Login',
    description: '',
    image: '',
    url: '/login'
  })
}

const Page: NextPage = async () => {
  return (
    <main>
      <Header />
    </main>
  )
}

export default Page
