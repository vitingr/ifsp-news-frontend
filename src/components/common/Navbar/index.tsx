import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import { getUserSession } from '@/utils/auth/getUserSession'

import { NAVBAR_LINKS } from './data'
import { Logged } from './Logged'
import { NotLogged } from './NotLogged'
import { Strip } from './Strip'

export const Navbar: FC = async () => {
  const user = await getUserSession()

  return (
    <div className="sticky inset-0 z-[999] w-full">
      <nav className="bg-opacity-10 w-full bg-[#f5f5f7c2] bg-clip-padding px-6 py-2 backdrop-blur-sm backdrop-filter">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-8 lg:justify-between">
          <div className="flex items-center gap-3">
            <figure className="mx-auto h-8 w-8">
              <Image
                alt="IFSP Logo"
                className="h-8 w-8 object-cover"
                height={200}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Instituto_Federal_de_S%C3%A3o_Paulo_-_Marca_Vertical_2015.svg/2383px-Instituto_Federal_de_S%C3%A3o_Paulo_-_Marca_Vertical_2015.svg.png"
                width={200}
              />
            </figure>
            <Link className="w-auto" href="/">
              <span className="!font-bold !text-neutral-800">IFSP news</span>
            </Link>
          </div>

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
      <Strip />
    </div>
  )
}
