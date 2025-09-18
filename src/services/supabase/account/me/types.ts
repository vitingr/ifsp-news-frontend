import type { User } from '@/types/models/user'

export interface UpdateUserPayload {
  payload: Partial<User>
  token: string
}

export interface UpdateUserResponse {
  user: User
}
