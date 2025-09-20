import type { AuthModalEventData } from '../utils/customEvents/@handlers/authModal/types'

export interface CustomEvents {
  'auth-modal': {
    action: 'open' | 'close'
    data?: AuthModalEventData
  }
}
