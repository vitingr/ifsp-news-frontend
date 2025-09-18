import type { Article } from '@/types/models/article'
import type {
  PaginationData,
  PaginationParams
} from '@/types/services/paginationData'

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
  }
  token: string
}

export interface DeleteArticlePayload {
  id: string
  token: string
}

export interface GetAllArticlesResponse extends PaginationData {
  articles: Article[]
}

export interface GetArticleBySlugResponse extends PaginationData {
  article: Article
}
