'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { type FC, useState } from 'react'

import { Google } from '@/assets/brands/Google'
import Beams from '@/components/Beams'
import { Button } from '@/components/toolkit/Button'
import { InputField } from '@/components/toolkit/Fields/InputField'

export const Header: FC = () => {
  const searchParams = useSearchParams()

  const [isLoadingSubmit, setIsLoadingSubmit] = useState({
    google: false
  })

  const handleSignInWithGoogle = async () => {
    setIsLoadingSubmit(prev => ({
      ...prev,
      google: true
    }))

    const inviteToken = searchParams.get('inviteToken')
    const hasInviteToken = Boolean(inviteToken)

    if (hasInviteToken) {
      await fetch('/api/invites/set-invite-cookie', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          inviteToken
        })
      })
    }

    await signIn('google')
  }

  return (
    <section className="flex h-screen w-screen lg:justify-between">
      <header className="flex h-full w-full max-w-1/2 items-center justify-center">
        <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-8">
          <figure className="mx-auto h-20 w-20">
            <Image
              alt="IFSP Logo"
              className="h-20 w-20 object-cover"
              height={200}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Instituto_Federal_de_S%C3%A3o_Paulo_-_Marca_Vertical_2015.svg/2383px-Instituto_Federal_de_S%C3%A3o_Paulo_-_Marca_Vertical_2015.svg.png"
              width={200}
            />
          </figure>
          <article className="-mt-3 flex flex-col items-center gap-1">
            <h2 className="text-center text-xl !font-semibold lg:text-2xl">
              IFSP News
            </h2>
            <p className="text=base text-center !text-neutral-500">
              Entre na sua conta para continuar sua jornada{' '}
              <br className="hidden xl:block" /> comentando ou curtindo artigos
            </p>
          </article>
          <button
            className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-sm border border-neutral-200 px-4 py-2 transition-all duration-300 hover:bg-neutral-50"
            disabled={isLoadingSubmit.google}
            onClick={() => handleSignInWithGoogle()}
          >
            <figure className="w-auto">
              <Google className="h-5 w-5" />
            </figure>
            <p className="text-sm">Entrar com o Google</p>
          </button>
          <div className="relative w-full">
            <div className="h-[1px] w-full border-b border-neutral-200" />
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neutral-300 px-2 py-1 text-xs !text-neutral-600">
              Ou continuar com
            </span>
          </div>
          <form className="flex w-full flex-col gap-2">
            <InputField
              label="Email"
              placeholder="Insira seu email"
              variant="secondary"
              required
            />
            <InputField
              autoComplete="off"
              label="Senha"
              type="password"
              variant="secondary"
              required
            />
            <Button
              className="mt-4 min-w-full cursor-pointer !text-white"
              variant="primary"
            >
              Entrar
            </Button>
          </form>
          <p className="mx-auto text-sm">
            Ou entre em contato com nosso{' '}
            <span className="text-sm !text-emerald-600">suporte</span>
          </p>
        </div>
      </header>
      <figure className="relative w-full max-w-1/2">
        <Beams
          beamHeight={15}
          beamNumber={12}
          beamWidth={2}
          lightColor="#ffffff"
          noiseIntensity={1.75}
          rotation={30}
          scale={0.2}
          speed={2}
        />
      </figure>
    </section>
  )
}
