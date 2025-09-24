import { apiPostgres } from '@/instances/api'

import type { AcceptInvitePayload, CreateInvitePayload } from './types'

export class Invites {
  createInvite = async ({ email, role, token }: CreateInvitePayload) => {
    try {
      return await apiPostgres.post(
        '/create-invite',
        {
          email,
          role
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    } catch (error) {
      console.error({
        createInviteError: error.message
      })
    }
  }

  acceptInvite = async ({ token }: AcceptInvitePayload) => {
    try {
      return await apiPostgres.post('/accept-invite', {
        token
      })
    } catch (error) {
      console.error({
        acceptInviteError: error.message
      })
    }
  }
}
