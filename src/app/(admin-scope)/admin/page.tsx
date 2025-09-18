import type { NextPage } from 'next'

import { getMetaData } from '@/utils/seo/getMetaData'

export async function generateMetadata() {
  return getMetaData({
    title: 'Admin',
    description: '',
    image: '',
    url: '/admin'
  })
}

const Page: NextPage = async () => {
  return <main></main>
}

export default Page
