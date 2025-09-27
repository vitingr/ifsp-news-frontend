'use client'

import axios from 'axios'
import type { FC } from 'react'
import { useEffect, useState } from 'react'

import type { Invite } from '@/types/models/invite'

import { Result } from '../Result'

export const AcceptInvite: FC = () => {
  const [invite, setInvite] = useState<Invite | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const inviteToken = params.get('inviteToken')

    if (!inviteToken) return

    const fetchInvite = async () => {
      try {
        setLoading(true)
        const result = await axios.get<Invite>(
          `/api/invites/get-invite-by-token?inviteToken=${inviteToken}`
        )
        setInvite(result.data)
      } catch (err: any) {
        console.error('Failed to fetch invite', err)
      } finally {
        setLoading(false)
      }
    }

    fetchInvite()
  }, [])

  return (
    <section className="h-screen w-screen">
      {loading ? <p>carregando...</p> : <Result invite={invite} />}
    </section>
  )
}
