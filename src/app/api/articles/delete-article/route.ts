import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { supabase } from '@/instances/supabase'

export const DELETE = async (req: NextRequest) => {
  try {
    const articleId = req.nextUrl.searchParams.get('articleId')
    const token = req.nextUrl.searchParams.get('token')

    if (!articleId || !token) {
      return NextResponse.json(
        { message: 'Missing categoryId or token.' },
        { status: 400 }
      )
    }

    const { status, data } = await supabase.articles.deleteArticle({
      id: articleId,
      token
    })

    if (status !== 200) {
      return NextResponse.json(
        { message: data?.message || 'Cannot delete this Article.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ status: 200 })
  } catch (err) {
    console.error({
      'POST/api/articles/delete-article': err.message
    })

    return NextResponse.json(
      { message: err.message },
      { status: err.statusCode }
    )
  }
}
