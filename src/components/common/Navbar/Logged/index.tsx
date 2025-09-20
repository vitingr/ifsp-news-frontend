import Image from 'next/image'
import type { FC } from 'react'

import { getUserSession } from '@/utils/auth/getUserSession'

export const Logged: FC = async () => {
  const user = await getUserSession()

  return (
    <div className="flex items-center gap-4">
      <figure className="h-9 w-9 rounded-full">
        <Image
          alt="profile image"
          className="h-9 w-9 rounded-full object-cover"
          height={80}
          src="https://plus.unsplash.com/premium_photo-1672201106204-58e9af7a2888?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhZGllbnQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
          width={80}
        />
      </figure>
      {user.role !== 'student' ? <button>painel de admin</button> : null}
    </div>
  )
}
