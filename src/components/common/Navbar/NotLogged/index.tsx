import Link from 'next/link'
import type { FC } from 'react'

export const NotLogged: FC = () => {
  return (
    <Link
      aria-label="Login Button"
      className="h-fit cursor-pointer rounded-full border border-neutral-300 px-6 py-1.5 text-sm transition-all duration-300 hover:bg-neutral-100"
      href="/login"
    >
      Log in
    </Link>
  )
}
