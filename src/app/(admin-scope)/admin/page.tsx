import type { NextPage } from 'next'

import { getUserSession } from '@/utils/auth/getUserSession'
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
  const user = await getUserSession()

  // if (user?.role === 'student' || !user?.role) {
  //   redirect('/')
  // }

  return <main>testando - {JSON.stringify(user)}</main>
}

export default Page
