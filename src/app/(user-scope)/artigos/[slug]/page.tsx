import type { NextPage } from 'next'

import { Footer } from '@/components/common/Footer'
import { Navbar } from '@/components/common/Navbar'
import { supabase } from '@/instances/supabase'

import { ArticleContent } from './components/ArticleContent'
import { ArticleHeader } from './components/ArticleHeader'
import type { ArticleDynamicPage } from './types'

// export async function generateMetadata({ params }) {
//   const { slug } = await params

//   const { data } = await supabase.articles.getArticleBySlug({ slug })

//   return getMetaData({
//     title: data.title,
//     description: data.description,
//     image: data.thumb,
//     url: `/artigos/${data.slug}`
//   })
// }

const Page: NextPage<ArticleDynamicPage> = async ({ params }) => {
  const { slug } = await params

  const { data } = await supabase.articles.getArticleBySlug({ slug })

  return (
    <>
      <Navbar />
      <main>
        <ArticleHeader article={data} />
        <ArticleContent article={data} />
      </main>
      <Footer />
    </>
  )
}

export default Page
