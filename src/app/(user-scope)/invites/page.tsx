import type { NextPage } from 'next'

import { getMetaData } from '@/utils/seo/getMetaData'

import { AcceptInvite } from './components/AcceptInvite'

export async function generateMetadata() {
  return getMetaData({
    title: 'IFSP News | Invites',
    description: '',
    image: '',
    url: '/invites'
  })
}

const Page: NextPage = async () => {
  return (
    <main>
      <AcceptInvite />
    </main>
  )
}

export default Page
