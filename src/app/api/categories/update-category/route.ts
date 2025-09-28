import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { supabase } from '@/instances/supabase'

export const POST = async (req: NextRequest) => {
  try {
    const { categoryId, payload, token } = await req.json()

    const { status } = await supabase.categories.updateCategory({
      payload,
      token,
      id: categoryId
    })

    if (status !== 200) {
      return NextResponse.json(
        { message: 'Cannot update this Category.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ status: 200 })
  } catch (err) {
    console.error({
      'PUT/api/categories/update-category': err.message
    })

    return NextResponse.json(
      { message: err.message },
      { status: err.statusCode }
    )
  }
}
