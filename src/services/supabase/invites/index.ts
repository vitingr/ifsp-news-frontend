import { apiPostgres } from '@/instances/api'

import type {
  AcceptInvitePayload,
  CreateInvitePayload,
  GetInviteByTokenPayload
} from './types'

export class Invites {
  createInvite = async ({ email, role, token }: CreateInvitePayload) => {
    try {
      return await apiPostgres.post(
        '/invites/create-invite',
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

  acceptInvite = async ({ token, inviteToken }: AcceptInvitePayload) => {
    try {
      return await apiPostgres.post(
        '/invites/accept-invite',
        {
          token: inviteToken
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    } catch (error) {
      console.error({
        acceptInviteError: error.message
      })
    }
  }

  getInviteByToken = async ({ inviteToken }: GetInviteByTokenPayload) => {
    try {
      return await apiPostgres.get(`/invites/${inviteToken}`)
    } catch (error) {
      console.error({
        getInviteByTokenErr: error.message
      })
    }
  }
}
