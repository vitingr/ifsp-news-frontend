import { getServerSession } from 'next-auth'

import { AuthModal } from '@/components/common/AuthModal'
import { InviteAuthor } from '@/components/common/Forms/InviteAuthor'
import { Toaster } from '@/components/ui/sonner'
import NextAuthProvider from '@/context/NextAuthProvider'
import { authOptions } from '@/lib/auth'

//@ts-expect-error
import '@/styles/globals.css'

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="pt">
      <body className="overflow-x-hidden text-neutral-700">
        <NextAuthProvider session={session}>
          {children}
          <AuthModal />
          <InviteAuthor />
          <Toaster />
        </NextAuthProvider>
      </body>
    </html>
  )
}
