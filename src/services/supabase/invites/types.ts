import type { UserRole } from '@/types/models/user'

export interface CreateInvitePayload {
  email: string
  role: UserRole
  token: string
}

export interface AcceptInvitePayload {
  inviteToken: string
  token: string
}

export interface GetInviteByTokenPayload {
  inviteToken: string
}
