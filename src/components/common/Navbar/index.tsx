import Link from 'next/link'
import type { FC } from 'react'

import { getUserSession } from '@/utils/auth/getUserSession'

import { NAVBAR_LINKS } from './data'
import { Logged } from './Logged'
import { NotLogged } from './NotLogged'

export const Navbar: FC = async () => {
  const user = await getUserSession()

  return (
    <nav className="bg-opacity-10 backdrop-filter5 sticky inset-0 z-40 w-full bg-[#f5f5f7c2] bg-clip-padding px-6 py-2 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-8 lg:justify-between">
        <Link className="w-auto" href="/">
          <span className="!font-bold !text-neutral-800">IFSP news</span>
        </Link>

        <ul className="flex w-full flex-1 items-center justify-center gap-8">
          {NAVBAR_LINKS.map((link, index: number) => (
            <li
              className="cursor-pointer text-xs !font-medium !text-neutral-600"
              key={`navbar-link-${index}`}
            >
              {link.label}
            </li>
          ))}
        </ul>
        <div className="w-auto">{user ? <Logged /> : <NotLogged />}</div>
      </div>
    </nav>
  )
}
