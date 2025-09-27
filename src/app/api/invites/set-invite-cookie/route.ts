import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { inviteToken } = body

    const cookieStore = await cookies()

    if (inviteToken) {
      cookieStore.set('temp_invite_token', inviteToken, {
        maxAge: 600,
        path: '/',
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax'
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erro ao definir cookies:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
