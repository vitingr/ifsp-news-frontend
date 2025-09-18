import type { User } from '@/types/models/user'

export interface SocialLoginPayload {
  email: string
  socialToken: string
  socialType: 'google'
}

export interface SocialLoginResponse {
  refreshToken: string
  token: string
  user: User
}
