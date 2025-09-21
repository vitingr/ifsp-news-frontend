import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import { getUserSession } from '@/utils/auth/getUserSession'

export const Logged: FC = async () => {
  const user = await getUserSession()

  return (
    <div className="flex items-center gap-6">
      <figure className="h-9 w-9 rounded-full">
        <Image
          alt="profile image"
          className="h-9 w-9 rounded-full object-cover"
          height={80}
          src="https://plus.unsplash.com/premium_photo-1672201106204-58e9af7a2888?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhZGllbnQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
          width={80}
        />
      </figure>
      {user.role !== 'student' ? (
        <Link
          className="cursor-pointer rounded-sm bg-neutral-700 px-4 py-1 text-center text-sm !text-white transition-all duration-300 hover:bg-neutral-600"
          href="/admin"
        >
          Admin
        </Link>
      ) : null}
    </div>
  )
}
