import type { NextPage } from 'next'

import { getMetaData } from '@/utils/seo/getMetaData'

import type { ArticleDynamicPage } from './types'

export async function generateMetadata() {
  return getMetaData({
    title: 'Page do artigo',
    description: '',
    image: '',
    url: '/'
  })
}

const Page: NextPage<ArticleDynamicPage> = async ({ params }) => {
  const { slug } = await params

  return <main>{slug}</main>
}

export default Page
