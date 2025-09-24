import type { UserRole } from '@/types/models/user'

export interface CreateInvitePayload {
  email: string
  role: UserRole
  token: string
}

export interface AcceptInvitePayload {
  token: string
}
