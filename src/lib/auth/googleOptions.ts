import type { TokenSet } from 'next-auth'
import type { GoogleProfile } from 'next-auth/providers/google'

import { ACCESS_TOKEN_EXPIRES_SECONDS } from '@/constants/auth/accessTokenExpiresSeconds'
import { account } from '@/instances/account'

export const googleOptions = {
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  async profile(...props) {
    const [profile, tokens] = props as [GoogleProfile, TokenSet]

    const { email } = profile
    const { id_token } = tokens

    const { data } = await account.auth.socialLogin({
      email,
      socialToken: id_token,
      socialType: 'google'
    })

    return {
      ...data.user,
      accessToken: data.token,
      refreshToken: data.refreshToken,
      expiresIn: ACCESS_TOKEN_EXPIRES_SECONDS
    }
  }
}
