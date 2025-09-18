'use client'

import type { SessionContextValue } from 'next-auth/react'
import { useSession } from 'next-auth/react'

import type { User } from '@/types/models/user'

interface UseUserSessionReturn {
  status: SessionContextValue['status']
  token?: string
  update: SessionContextValue['update']
  user?: User
}

export const useUserSession = (): UseUserSessionReturn => {
  const { data, update, status } = useSession() ?? {}

  return {
    user: data?.user,
    token: data?.accessToken,
    status,
    update
  }
}
