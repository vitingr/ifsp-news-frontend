import type { Profile } from '@/types/models/profile'

export interface CreateProfilePayload extends Omit<Profile, 'id'> {}

export interface CreateProfileResponse {
  profile: Profile
}
