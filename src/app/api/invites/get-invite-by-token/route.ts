import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { supabase } from '@/instances/supabase'

export const GET = async (req: NextRequest) => {
  try {
    const url = new URL(req.url)

    const inviteToken = url.searchParams.get('inviteToken')

    const { data } = await supabase.invites.getInviteByToken({
      inviteToken
    })

    return NextResponse.json(data, { status: 200 })
  } catch (err) {
    console.error({
      'GET/api/invites/get-invite-by-token': err.message
    })

    return NextResponse.json(
      { message: 'Error! Any Invite found' },
      { status: 500 }
    )
  }
}
