import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { supabase } from '@/instances/supabase'

export const GET = async (req: NextRequest) => {
  try {
    const { data } = await supabase.authors.getAllAuthors({})

    console.log(JSON.stringify(data))

    return NextResponse.json(data, { status: 200 })
  } catch (err) {
    console.error({
      'GET/api/auhtors/get-all-auhtors': err.message
    })

    return NextResponse.json(
      { message: 'Error! Any author found' },
      { status: 500 }
    )
  }
}
