import type { Article } from './article'
import type { Profile } from './profile'

export type UserRole = 'student' | 'admin' | 'super_admin'

export interface User {
  articles?: Article[]
  createdAt: string
  email: string
  error?: string
  googleId?: string
  id: string
  profile?: Profile
  role: UserRole
  token?: string
  updatedAt: String
}
