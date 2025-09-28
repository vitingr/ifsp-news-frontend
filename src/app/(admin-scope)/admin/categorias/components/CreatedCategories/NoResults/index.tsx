import type { FC } from 'react'

import { EmptyBox } from '@/assets/common/EmptyBox'

export const NoResults: FC = () => {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 py-8">
      <EmptyBox />
      <p className="text-center text-base text-neutral-600 lg:text-lg">
        Ops... não encontramos resultados para{' '}
        <br className="hidden lg:block" /> o que você busca!
      </p>
    </div>
  )
}
