import type { TokenSet } from 'next-auth'
import type { GoogleProfile } from 'next-auth/providers/google'
import { cookies } from 'next/headers'

import { ACCESS_TOKEN_EXPIRES_SECONDS } from '@/constants/auth/accessTokenExpiresSeconds'
import { account } from '@/instances/account'

export const googleOptions = {
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  async profile(...props) {
    const [profile, tokens] = props as [GoogleProfile, TokenSet]

    const cookieStore = await cookies()

    const inviteTokenCookie = cookieStore.get('temp_invite_token')

    const inviteToken = inviteTokenCookie?.value || null

    const { email, name, picture } = profile
    const { id_token } = tokens

    const { data } = await account.auth.socialLogin({
      email,
      socialToken: id_token,
      socialType: 'google',
      role: inviteToken ? 'author' : 'student',
      name,
      avatarUrl: picture
    })

    return {
      ...data.user,
      accessToken: data.token,
      refreshToken: data.refreshToken,
      expiresIn: ACCESS_TOKEN_EXPIRES_SECONDS
    }
  }
}
