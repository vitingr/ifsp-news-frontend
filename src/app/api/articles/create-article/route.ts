import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { supabase } from '@/instances/supabase'

export const POST = async (req: NextRequest) => {
  try {
    const { payload, token } = await req.json()

    const { status, data } = await supabase.articles.createArticle({
      payload,
      token
    })

    if (status !== 201) {
      return NextResponse.json(
        { message: data?.message || 'Cannot create a new Article.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: 'Article Created' }, { status: 201 })
  } catch (err) {
    console.error({
      'POST/api/articles/create-article': err.message
    })

    return NextResponse.json(
      { message: err.message },
      { status: err.statusCode }
    )
  }
}
