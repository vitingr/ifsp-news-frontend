'use client'

import axios from 'axios'
import type { FC } from 'react'
import { useEffect, useState } from 'react'

import { Loading } from '@/components/common/Loading'
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
    <section className="flex h-screen w-screen items-center justify-center">
      {loading ? (
        <div className="justfiy-center mx-auto flex items-center">
          <Loading />
        </div>
      ) : (
        <Result invite={invite} />
      )}
    </section>
  )
}
