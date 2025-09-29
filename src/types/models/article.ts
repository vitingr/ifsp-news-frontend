import type { User } from './user'

export interface Article {
  articleCategory?: {
    categoryId: string
    articleId: string
    id: string
  }
  author?: User
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
