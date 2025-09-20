import Link from 'next/link'
import type { FC } from 'react'

import { getUserSession } from '@/utils/auth/getUserSession'

import { Logged } from './Logged'
import { NotLogged } from './NotLogged'

export const Navbar: FC = async () => {
  const user = await getUserSession()

  return (
    <nav className="sticky inset-0 z-40 w-full bg-neutral-50 px-4 py-2.5">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-8 lg:justify-between">
        <div className="flex w-full flex-1">
          <Link className="text-2xl font-medium" href="/">
            IFSP News
          </Link>
        </div>
        <div className="w-auto">{user ? <Logged /> : <NotLogged />}</div>
      </div>
    </nav>
  )
}
