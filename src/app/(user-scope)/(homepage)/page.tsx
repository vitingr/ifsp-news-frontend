import type { NextPage } from 'next'

import { getMetaData } from '@/utils/seo/getMetaData'

export async function generateMetadata() {
  return getMetaData({
    title: 'Homepage',
    description: '',
    image: '',
    url: '/'
  })
}

const Page: NextPage = async () => {
  return <main></main>
}

export default Page
