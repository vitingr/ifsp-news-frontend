import type { NextPage } from 'next'

import { Footer } from '@/components/common/Footer'
import { Navbar } from '@/components/common/Navbar'
import { getMetaData } from '@/utils/seo/getMetaData'

import { Banner } from './components/Banner'
import { Header } from './components/Header'
import { LatestNews } from './components/LatestNews'
import { Others } from './components/Others'
import { Templates } from './components/Templates'

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
      <Navbar />
      <main className="overflow-x-hidden bg-gray-50">
        <Header />
        <LatestNews />
        <Templates />
        <Others />
        <Banner />
      </main>
      <Footer />
    </>
  )
}

export default Page
