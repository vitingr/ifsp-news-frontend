'use client'

import axios from 'axios'
import { useState } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '@/components/toolkit/Button'
import { InputField } from '@/components/toolkit/Fields/InputField'
import { SelectField } from '@/components/toolkit/Fields/SelectField'
import { Modal } from '@/components/toolkit/Modal'
import { BASE_URL } from '@/constants/environments/baseUrl'
import { useEventListener } from '@/hooks/useEventListener'
import { useUserSession } from '@/hooks/useUserSession'
import { zodResolver } from '@hookform/resolvers/zod'

import { Copy } from './icons/Copy'
import type { InviteAuthorInputs } from './schemas'
import { inviteAuthorSchema } from './schemas'

export const InviteAuthor = () => {
  const user = useUserSession()

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [inviteToken, setInviteToken] = useState<string>('')

  const formMethods = useForm<InviteAuthorInputs>({
    resolver: zodResolver(inviteAuthorSchema)
  })

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, isSubmitSuccessful }
  } = formMethods

  const onSubmit: SubmitHandler<InviteAuthorInputs> = async ({ email }) => {
    try {
      const { data, status } = await axios.post('/api/invites/create-invite', {
        email,
        role: 'author',
        token: user.token
      })

      if (status !== 201) {
        toast('Houve um erro ao convidar um novo autor.')
        return
      }

      reset()
      toast.success('O convite foi enviado com sucesso!')
      setInviteToken(data.invite.token)
    } catch (inviteAuthorErr) {
      console.log(inviteAuthorErr)
    }
  }

  useEventListener('invite-author', ({ action }) => {
    switch (action) {
      case 'open': {
        setIsOpen(true)
        break
      }
      case 'close': {
        setIsOpen(false)
        break
      }
    }
  })

  const handleCopy = async () => {
    await navigator.clipboard.writeText(
      `${BASE_URL}/invites?inviteToken${inviteToken}`
    )
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      {isSubmitSuccessful && inviteToken !== '' ? (
        <div className="flex w-full max-w-lg min-w-[448px] flex-col gap-8 rounded-sm bg-white px-8 py-16">
          <h2 className="w-full text-left text-2xl !font-bold">
            Adicionar autor
          </h2>
          <div className="flex w-full items-center rounded-sm border border-neutral-200 text-sm !text-neutral-500">
            <p className="flex w-full flex-1 items-center bg-neutral-50 px-4 py-2 text-sm !text-neutral-700">
              {BASE_URL}/invites?inviteToken={inviteToken}
            </p>
            <button
              onClick={() => {
                handleCopy()
                toast.success(
                  'O link de convite foi copiado para a área de transferências!'
                )
              }}
              className="flex cursor-pointer items-center justify-center rounded-r-sm bg-white p-3"
              type="button"
            >
              <Copy className="h-4 w-4" />
            </button>
          </div>
          <Button
            className="min-w-full cursor-pointer !text-white"
            onClick={() => setIsOpen(false)}
            variant="primary"
          >
            Fechar
          </Button>
        </div>
      ) : (
        <div className="flex w-full max-w-md min-w-[448px] flex-col gap-8 rounded-sm bg-white px-8 py-16">
          <h2 className="w-full text-left text-2xl !font-bold">
            Adicionar autor
          </h2>
          <form
            className="flex w-full flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputField
              label="Email"
              placeholder="Digite o email do autor"
              type="email"
              {...register('email')}
              variant="secondary"
              required
            />
            <SelectField
              label="Cargo"
              name="role"
              options={[{ label: 'Author', value: 'author' }]}
              required
              {...register('role')}
            />
            <Button
              className="min-w-full cursor-pointer !text-white"
              disabled={isSubmitting}
              type="submit"
              variant="primary"
            >
              Enviar convite
            </Button>
          </form>
        </div>
      )}
    </Modal>
  )
}
