import { useEffect, useState } from 'react'

import type { CustomEventHandler } from '@/types/customEvents/common'
import type { CustomEvents } from '@/types/customEvents/customEvents'
import { createCustomEvent } from '@/types/utils/customEvents/createCustomEvent'
import { deleteCustomEvent } from '@/types/utils/customEvents/deleteCustomEvent'

import type { Handler } from './types'

export const useEventListener = <EventName extends keyof CustomEvents>(
  eventName: EventName,
  eventHandler: Handler<EventName>
) => {
  const [data, setData] = useState<CustomEvents[EventName]['data']>()

  const handleSetData = <Data>(data: Data) => {
    setData(prev => ({
      ...prev,
      ...data
    }))
  }

  useEffect(() => {
    const handler: CustomEventHandler = (event: CustomEvent) => {
      if (event.detail.data) {
        handleSetData(event.detail.data)
      }

      eventHandler(event.detail)
    }

    createCustomEvent({
      eventName,
      handler
    })

    return () => {
      deleteCustomEvent({
        eventName,
        handler
      })
    }
  }, [eventName, eventHandler])

  return {
    data,
    setData
  }
}
