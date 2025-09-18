import { apiPostgres } from '@/instances/api'

import type { CreateProfilePayload } from './types'

export class Profiles {
  createProfile = async (payload: CreateProfilePayload, token: string) => {
    try {
      return await apiPostgres.post('profiles', payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      console.error({
        createProfileErrorMessage: error.message
      })
    }
  }

  updateProfile = async (payload: CreateProfilePayload, token: string) => {
    try {
      return await apiPostgres.patch('profiles', payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      console.error({
        updateProfileErrorMessage: error.message
      })
    }
  }
}
