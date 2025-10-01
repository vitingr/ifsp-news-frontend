import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { supabase } from '@/instances/supabase'

export const GET = async (req: NextRequest) => {
  try {
    const { data } = await supabase.categories.getAllCategories({})

    return NextResponse.json(data, { status: 200 })
  } catch (err) {
    console.error({
      'GET/api/categories/get-all-categories': err.message
    })

    return NextResponse.json(
      { message: 'Error! Any Category found' },
      { status: 500 }
    )
  }
}
