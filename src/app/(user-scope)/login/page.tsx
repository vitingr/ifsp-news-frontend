import type { NextPage } from 'next'
import { redirect } from 'next/navigation'

import { getUserSession } from '@/utils/auth/getUserSession'
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
  const user = await getUserSession()

  if (user) {
    redirect('/')
  }

  return (
    <main>
      <Header />
    </main>
  )
}

export default Page
