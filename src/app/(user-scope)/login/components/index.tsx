import { signIn } from 'next-auth/react'
import type { FC } from 'react'
import { useState } from 'react'

export const LoginForm: FC = () => {
  const [isLoadingSubmit, setIsLoadingSubmit] = useState<boolean>(false)

  const handleSignInWithGoogle = async () => {
    setIsLoadingSubmit(true)

    signIn('google').then(() => {
      console.log('login realizado')
      setIsLoadingSubmit(false)
    })
  }

  return (
    <form>
      <button disabled={isLoadingSubmit} onClick={handleSignInWithGoogle}>
        Entrar
      </button>
    </form>
  )
}
