import type { Category } from '@/types/models/category'
import type {
  PaginationData,
  PaginationParams
} from '@/types/services/paginationData'

export interface GetAllCategoriesPayload {
  pagination?: PaginationParams
  search?: string
}

export interface GetCategoryBySlugPayload {
  slug: string
}

export interface CreateCategoryPayload {
  payload: {
    title: string
    slug: string
    description?: string
  }
  token: string
}

export interface DeleteCategoryPayload {
  id: string
  token: string
}

export interface UpdateCategoryPayload {
  id: string
  payload: {
    title: string
    slug: string
    description: string
  }
  token: string
}

export interface GetAllCategoriesResponse extends PaginationData {
  categories: Category[]
}

export interface GetCategoryBySlugResponse extends PaginationData {
  category: Category
}
