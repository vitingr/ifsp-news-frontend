import type { NextPage } from 'next'

import { Footer } from '@/components/common/Footer'
import { getMetaData } from '@/utils/seo/getMetaData'

import { Header } from './components/Header'
import { LatestNews } from './components/LatestNews'

export async function generateMetadata() {
  return getMetaData({
    title: 'Homepage',
    description: '',
    image: '',
    url: '/'
  })
}

const Page: NextPage = async () => {
  return (
    <>
      <main className="bg-gray-50">
        <Header />
        <LatestNews />
      </main>
      <Footer />
    </>
  )
}

export default Page
