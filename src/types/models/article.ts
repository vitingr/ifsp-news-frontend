import type { User } from './user'

export interface Article {
  author?: User
  categories?: string[]
  content: string
  createdAt: Date
  description?: string
  id: string
  isFeatured: boolean
  slug: string
  thumb: string
  title: string
  updatedAt: Date
}
