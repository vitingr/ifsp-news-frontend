import type { User as UserType } from '@/types/models/user'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    accessToken?: string
    error?: string
    user: UserType
  }

  interface User {
    accessToken?: string
    expiresIn?: number
    inviteToken?: string
    refreshToken?: string
  }

  interface JWT {
    accessToken?: string
    accessTokenExpires?: number
    error?: string
    refreshToken?: string
  }
}
