import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { supabase } from '@/instances/supabase'

export const GET = async (req: NextRequest) => {
  try {
    const url = new URL(req.url)

    const email = url.searchParams.get('email')

    const { data } = await supabase.users.getUserByEmail({
      email
    })

    return NextResponse.json(data, { status: 200 })
  } catch (err) {
    console.error({
      'GET/api/users/get-user-by-email': err.message
    })

    return NextResponse.json(
      { message: 'Error! Any User found' },
      { status: 500 }
    )
  }
}
