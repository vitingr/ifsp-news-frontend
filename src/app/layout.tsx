import { getServerSession } from 'next-auth'

import { AuthModal } from '@/components/common/AuthModal'
import { Toaster } from '@/components/ui/sonner'
import NextAuthProvider from '@/context/NextAuthProvider'
import { authOptions } from '@/lib/auth'

import '@/styles/globals.css'

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="pt">
      <body>
        <NextAuthProvider session={session}>
          {children}
          <AuthModal />
          <Toaster />
        </NextAuthProvider>
      </body>
    </html>
  )
}
