import type { PaginationParams } from '@/types/services/paginationData'

export interface GetAllAuthorsPayload {
  pagination?: PaginationParams
  search?: string
}
