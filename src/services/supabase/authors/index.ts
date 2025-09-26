import { apiPostgres } from '@/instances/api'

import type { GetAllAuthorsPayload } from './types'

export class Authors {
  getAllAuthors = async ({ pagination, ...payload }: GetAllAuthorsPayload) => {
    const filteredPayload = Object.fromEntries(
      Object.entries(payload).filter(([_, value]) => value !== undefined)
    )

    try {
      return await apiPostgres.get('/authors', {
        params: {
          ...pagination,
          ...filteredPayload
        }
      })
    } catch (error) {
      console.error({
        getAllAuthorsErrorMessage: error.message
      })
    }
  }
}
