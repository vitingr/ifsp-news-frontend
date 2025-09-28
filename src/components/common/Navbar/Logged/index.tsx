'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import { useUserSession } from '@/hooks/useUserSession'

export const Logged: FC = () => {
  const session = useUserSession()

  return (
    <div className="flex items-center gap-4">
      {session?.user?.role !== 'student' ? (
        <Link
          className="cursor-pointer rounded-sm bg-neutral-700 px-4 py-1 text-center text-sm !text-white transition-all duration-300 hover:bg-neutral-600"
          href="/admin"
        >
          Admin
        </Link>
      ) : null}
      <figure className="h-8 w-8 rounded-full">
        <Image
          src={
            session?.user?.avatarUrl ||
            'https://plus.unsplash.com/premium_photo-1672201106204-58e9af7a2888?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhZGllbnQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww'
          }
          alt="profile image"
          className="h-8 w-8 rounded-full object-cover transition-all duration-300 hover:brightness-105"
          height={80}
          width={80}
        />
      </figure>
    </div>
  )
}
