import type { User, UserRole } from '@/types/models/user'

export interface SocialLoginPayload {
  avatarUrl: string
  email: string
  name: string
  role: UserRole
  socialToken: string
  socialType: 'google'
}

export interface SocialLoginResponse {
  refreshToken: string
  token: string
  user: User
}
