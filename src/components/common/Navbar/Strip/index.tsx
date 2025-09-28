import type { FC } from 'react'

export const Strip: FC = async () => {
  return (
    <div className="flex w-screen items-center justify-center overflow-hidden bg-emerald-600 py-2">
      <span className="mx-auto max-w-2xl text-xs !font-medium !text-white lg:max-w-7xl">
        Agora o IFSP News está caras novas! leia os artigos e não fique mais de
        fora.
      </span>
    </div>
  )
}
