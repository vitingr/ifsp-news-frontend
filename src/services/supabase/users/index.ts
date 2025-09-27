import { apiPostgres } from '@/instances/api'

import type { GetUserByEmailPayload } from './types'

export class Users {
  getUserByEmail = async ({ email }: GetUserByEmailPayload) => {
    try {
      return await apiPostgres.get(`/users/email/${email}`)
    } catch (error) {
      console.error({
        getUserByEmailErr: error.message
      })
    }
  }
}
