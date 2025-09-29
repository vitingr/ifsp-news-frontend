import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { supabase } from '@/instances/supabase'

export const POST = async (req: NextRequest) => {
  try {
    const { email, role, token } = await req.json()

    const { status, data } = await supabase.invites.createInvite({
      email,
      role,
      token
    })

    if (status !== 201) {
      return NextResponse.json(
        { message: data?.message || 'Cannot create a new Invite.' },
        { status: 500 }
      )
    }

    return NextResponse.json(data, { status: 201 })
  } catch (err) {
    console.error({
      'POST/api/invites/create-invite': err.message
    })

    return NextResponse.json(
      { message: err.message },
      { status: err.statusCode }
    )
  }
}
