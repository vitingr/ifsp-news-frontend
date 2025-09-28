import type { AuthModalEventData } from '../utils/customEvents/@handlers/authModal/types'

export interface CustomEvents {
  'auth-modal': {
    action: 'open' | 'close'
    data?: AuthModalEventData
  }
  'delete-article': {
    action: 'open' | 'close'
    data: {
      id: string
    }
  }
  'delete-author': {
    action: 'open' | 'close'
    data: {
      id: string
    }
  }
  'delete-category': {
    action: 'open' | 'close'
    data: {
      id: string
    }
  }
  'invite-author': {
    action: 'open' | 'close'
  }
}
