import type { NextPage } from 'next'

import { getMetaData } from '@/utils/seo/getMetaData'

export async function generateMetadata() {
  return getMetaData({
    title: 'Login',
    description: '',
    image: '',
    url: '/login'
  })
}

const Page: NextPage = async () => {
  return <main></main>
}

export default Page
