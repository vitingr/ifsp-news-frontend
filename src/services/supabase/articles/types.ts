import type { Article } from '@/types/models/article'
import type { PaginationParams } from '@/types/services/paginationData'

export interface GetAllArticlesPayload {
  pagination?: PaginationParams
  search?: string
}

export interface GetArticleBySlugPayload {
  slug: string
}

export interface CreateArticlePayload {
  payload: {
    title: string
    slug: string
    description?: string
    isFeatured: boolean
    content: string
  }
  token: string
}

export interface UpdateArticlePayload {
  payload: {
    title: string
    slug: string
    description?: string
    isFeatured: boolean
    content: string
  }
  token: string
}

export interface DeleteArticlePayload {
  id: string
  token: string
}

export interface GetAllArticlesResponse {
  articles: Article[]
}

export interface GetArticleBySlugResponse {
  article: Article
}
