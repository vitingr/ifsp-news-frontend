import { triggerCustomEvent } from '../../triggerCustomEvent'
import type { AuthModalEventData } from './types'

export const handleOpenAuthModal = (data?: AuthModalEventData) => {
  triggerCustomEvent({
    eventName: 'auth-modal',
    data: {
      action: 'open',
      data
    }
  })
}
