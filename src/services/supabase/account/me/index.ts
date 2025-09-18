import { apiPostgres } from '@/instances/api'

import type { UpdateUserPayload, UpdateUserResponse } from './types'

export class Me {
  updateUser = async ({ payload, token }: UpdateUserPayload) => {
    try {
      return await apiPostgres.patch<UpdateUserResponse>('/me', payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      console.error({
        updateUserErrorMessage: error.message
      })
    }
  }
}
