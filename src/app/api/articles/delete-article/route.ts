import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { supabase } from '@/instances/supabase'

export const DELETE = async (req: NextRequest) => {
  try {
    const { articleId, token } = await req.json()

    const { status, data } = await supabase.articles.deleteArticle({
      id: articleId,
      token
    })

    if (status !== 204) {
      return NextResponse.json(
        { message: data?.message || 'Cannot delete this Article.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ status: 204 })
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
