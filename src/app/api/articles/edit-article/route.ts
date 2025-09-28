import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { supabase } from '@/instances/supabase'

export const PATCH = async (req: NextRequest) => {
  try {
    const { payload, token, articleId } = await req.json()

    const { status, data } = await supabase.articles.updateArticle({
      payload,
      token,
      id: articleId
    })

    if (status !== 200) {
      return NextResponse.json(
        { message: data?.message || 'Cannot edit this Article.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: 'Article Updated' }, { status: 200 })
  } catch (err) {
    console.error({
      'POST/api/articles/edit-article': err.message
    })

    return NextResponse.json(
      { message: err.message },
      { status: err.statusCode }
    )
  }
}
