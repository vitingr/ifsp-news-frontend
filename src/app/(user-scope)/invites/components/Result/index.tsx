'use client'

import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { type FC, useEffect, useState } from 'react'
import { toast } from 'sonner'

import { Loading } from '@/components/common/Loading'
import { Button } from '@/components/toolkit/Button'
import { useUserSession } from '@/hooks/useUserSession'
import type { User } from '@/types/models/user'

import type { ResultProps } from './types'

export const Result: FC<ResultProps> = ({ invite }) => {
  const userSession = useUserSession()

  const router = useRouter()

  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    if (!invite) return

    const fetchInvite = async () => {
      try {
        setLoading(true)
        console.log(invite)

        const { data, status } = await axios.get<User>(
          `/api/users/get-user-by-email?email=${invite.email}`
        )

        if (status === 200) {
          setUser(data)
          setLoading(false)
        }
      } catch (err: any) {
        console.log('Failed to fetch invite', err)
      } finally {
        setLoading(false)
      }
    }

    fetchInvite()
  }, [])

  const confirmInvite = async () => {
    if (invite.expiresAt.getTime() < Date.now()) {
      setError('EXPIRED_INVITE')
      toast.error('Erro! O convite está expirado...')
      return
    }

    if (user.email !== invite.email) {
      setError('WRONG_USER')
      toast.error('Erro! Você não pode aceitar o convite de outra pessoa...')
      return
    }

    if (invite.used === true) {
      setError('TOKEN_ALREADY_USED')
      toast.error('Erro! O Token desse invite já foi utlizado anteriormente...')
      return
    }

    try {
      const { status } = await axios.post('/api/invites/accept-invite', {
        token: userSession.token,
        inviteToken: invite.token
      })

      if (status !== 200) {
        toast.error(
          'Erro Inesperado! Não foi possível aceitar o invite na plataforma'
        )
        return
      }

      toast.success('Sucesso! O convite foi aceito com sucesso.')
      router.push('/admin')
    } catch (acceptInviteError) {
      console.error(acceptInviteError)
    }
  }

  return !loading ? (
    <div className="flex h-full w-full items-center justify-center">
      {userSession && user ? (
        <div className="flex max-w-lg flex-col items-center gap-1 rounded-sm border border-neutral-200 bg-white px-6 py-8">
          <h2 className="text-center text-3xl !font-bold">
            Você recebeu um convite para ser um Autor
          </h2>
          <p className="text-center text-base !text-neutral-500">
            Clique no botão abaixo para confirmar seu convite e começar a
            escrever seus artigos!
          </p>
          <Button
            className="mx-auto mt-8 cursor-pointer rounded-sm bg-neutral-700 px-6 py-2 text-center text-sm !text-white transition-all duration-300 hover:bg-neutral-600"
            onClick={() => confirmInvite()}
            variant="custom"
          >
            Confirmar convite
          </Button>
        </div>
      ) : (
        <div className="flex max-w-lg flex-col items-center gap-1 rounded-sm border border-neutral-200 bg-white px-6 py-8">
          <h2 className="text-center text-3xl !font-bold">
            Parece que você não tem uma conta ou não está logado!
          </h2>
          <p className="text-center text-base !text-neutral-500">
            Clique no botão abaixo e após preencher o formulário de login você
            irá imediatamente confirmar o convite!
          </p>
          <Link
            className="mx-auto mt-8 cursor-pointer rounded-sm bg-neutral-700 px-6 py-2 text-center text-sm !text-white transition-all duration-300 hover:bg-neutral-600"
            href={`/login?inviteToken=${invite.token}`}
          >
            Entrar e confirmar convite
          </Link>
        </div>
      )}

      {error}
    </div>
  ) : (
    <div className="justfiy-center mx-auto flex items-center">
      <Loading />
    </div>
  )
}
