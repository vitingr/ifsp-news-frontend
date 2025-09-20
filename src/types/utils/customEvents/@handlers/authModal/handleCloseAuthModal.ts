import { triggerCustomEvent } from '../../triggerCustomEvent'

export const handleCloseAuthModal = () => {
  triggerCustomEvent({
    eventName: 'auth-modal',
    data: {
      action: 'close'
    }
  })
}
