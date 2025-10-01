'use client'

import { signIn } from 'next-auth/react'
import type { FC } from 'react'
import { useState } from 'react'
import { toast } from 'sonner'

import { Google } from '@/assets/brands/Google'
import { Button } from '@/components/toolkit/Button'
import { Modal } from '@/components/toolkit/Modal'
import { useEventListener } from '@/hooks/useEventListener'

export const AuthModalWrapper: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isLoadingSubmit, setIsLoadingSubmit] = useState({
    google: false
  })

  const handleSignInWithGoogle = async () => {
    setIsLoadingSubmit(prev => ({
      ...prev,
      google: true
    }))
    signIn('google').then(() => {
      toast.success('Login Realizado com sucesso!', {
        description: 'Bem-vindo ao IFSP News'
      })
    })
  }

  useEventListener('auth-modal', ({ action }) => {
    switch (action) {
      case 'open':
        setIsOpen(true)
        break
      case 'close':
        setIsOpen(false)
        break
    }
  })

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex w-full max-w-2xl flex-col gap-8 bg-white px-8 py-12 lg:min-w-[480px] lg:gap-12">
        <article className="flex w-full flex-col items-center gap-2">
          <span className="text-center text-base font-medium">IFSP News</span>
          <h2 className="text-center text-xl font-semibold lg:text-3xl">
            Seja bem vindo ao IFSP News
          </h2>
        </article>
        <Button
          className="max-h-[48px] cursor-pointer"
          container="fluid"
          icon={<Google className="w-7" />}
          isLoading={isLoadingSubmit.google}
          onClick={handleSignInWithGoogle}
          type="button"
          variant="outlineDark"
        >
          Entrar com o Google
        </Button>
      </div>
    </Modal>
  )
}
