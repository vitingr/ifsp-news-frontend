import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { supabase } from '@/instances/supabase'

export const GET = async (req: NextRequest) => {
  try {
    const { data } = await supabase.articles.getAllArticles({})

    return NextResponse.json(data, { status: 200 })
  } catch (err) {
    console.error({
      'GET/api/articles/get-all-articles': err.message
    })

    return NextResponse.json(
      { message: 'Error! Any Article found' },
      { status: 500 }
    )
  }
}
