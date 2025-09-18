import type { Article } from './article'
import type { Profile } from './profile'

export interface User {
  articles?: Article[]
  createdAt: string
  email: string
  error?: string
  googleId?: string
  id: string
  profile?: Profile
  token?: string
  updatedAt: String
}
