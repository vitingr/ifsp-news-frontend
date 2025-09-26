import type { Article } from './article'

export type UserRole = 'student' | 'admin' | 'author'

export interface User {
  articles?: Article[]
  avatarUrl: string
  createdAt: string
  email: string
  error?: string
  googleId?: string
  id: string
  name: string
  role: UserRole
  token?: string
  updatedAt: String
}
