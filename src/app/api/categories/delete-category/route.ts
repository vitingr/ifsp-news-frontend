import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { supabase } from '@/instances/supabase'

export const DELETE = async (req: NextRequest) => {
  try {
    const { categoryId, token } = await req.json()

    const { status, data } = await supabase.categories.deleteCategory({
      id: categoryId,
      token
    })

    if (status !== 204) {
      return NextResponse.json(
        { message: data?.message || 'Cannot delete a Category.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ status: 204 })
  } catch (err) {
    console.error({
      'POST/api/categories/delete-category': err.message
    })

    return NextResponse.json(
      { message: err.message },
      { status: err.statusCode }
    )
  }
}
