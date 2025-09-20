'use client'

import { handleOpenAuthModal } from '@/types/utils/customEvents/@handlers/authModal/handleOpenAuthModal'

export const NotLogged: React.FC = () => {
  return (
    <button
      aria-label="Login Button"
      className="h-fit cursor-pointer rounded-full border border-neutral-300 px-6 py-1.5 transition-all duration-300 hover:bg-neutral-100"
      onClick={() => handleOpenAuthModal()}
    >
      Log in
    </button>
  )
}
