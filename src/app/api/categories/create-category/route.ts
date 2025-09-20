import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { supabase } from '@/instances/supabase'

export const POST = async (req: NextRequest) => {
  try {
    const { payload, token } = await req.json()

    console.log(payload)
    console.log(token)

    const { status, data } = await supabase.categories.createCategory({
      payload,
      token
    })

    if (status !== 201) {
      return NextResponse.json(
        { message: data?.message || 'Cannot create a new Category.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: 'Category Created' }, { status: 201 })
  } catch (err) {
    console.error({
      'POST/api/categories/create-category': err.message
    })

    return NextResponse.json(
      { message: err.message },
      { status: err.statusCode }
    )
  }
}
