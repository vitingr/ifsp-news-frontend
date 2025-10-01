import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { supabase } from '@/instances/supabase'

export const DELETE = async (req: NextRequest) => {
  try {
    const categoryId = req.nextUrl.searchParams.get('categoryId')
    const token = req.nextUrl.searchParams.get('token')

    if (!categoryId || !token) {
      return NextResponse.json(
        { message: 'Missing categoryId or token.' },
        { status: 400 }
      )
    }

    const { status, data } = await supabase.categories.deleteCategory({
      id: categoryId,
      token
    })

    if (status !== 200) {
      return NextResponse.json(
        { message: data?.message || 'Cannot delete a Category.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ status: 200 })
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
