import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { supabase } from '@/instances/supabase'

export const POST = async (req: NextRequest) => {
  try {
    const { articleId, payload, token } = await req.json()

    const { status } = await supabase.articles.updateArticle({
      payload,
      token,
      id: articleId
    })

    if (status !== 200) {
      return NextResponse.json(
        { message: 'Cannot update this Article.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ status: 200 })
  } catch (err) {
    console.error({
      'PUT/api/articles/update-article': err.message
    })

    return NextResponse.json(
      { message: err.message },
      { status: err.statusCode }
    )
  }
}
