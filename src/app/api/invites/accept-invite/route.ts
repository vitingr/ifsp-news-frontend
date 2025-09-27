import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { supabase } from '@/instances/supabase'

export const POST = async (req: NextRequest) => {
  try {
    const { token, inviteToken } = await req.json()

    const { status, data } = await supabase.invites.acceptInvite({
      token,
      inviteToken
    })

    if (status !== 200) {
      return NextResponse.json(
        {
          message:
            data?.message ||
            'Cannot accept this invite because is invalid or expired.'
        },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: 'Invite accepted.' }, { status: 200 })
  } catch (err) {
    console.error({
      'POST/api/invites/accept-invite': err.message
    })

    return NextResponse.json(
      { message: err.message },
      { status: err.statusCode }
    )
  }
}
