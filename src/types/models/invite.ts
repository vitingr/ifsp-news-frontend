import type { UserRole } from './user'

export interface Invite {
  createdAt: Date
  email: string
  expiresAt: Date
  id: string
  role: UserRole
  token: string
  used: boolean
}
