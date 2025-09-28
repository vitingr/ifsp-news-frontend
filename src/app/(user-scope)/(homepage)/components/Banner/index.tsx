'use client'

import type { FC } from 'react'

import Silk from '@/components/Silk'

export const Banner: FC = () => {
  return (
    <section className="w-full px-4 py-12 lg:py-16 xl:px-0">
      <div className="relative mx-auto flex h-[450px] w-full max-w-2xl items-center justify-center rounded-xl lg:max-w-7xl">
        <figure className="silk-banner absolute z-30 h-full w-full rounded-xl">
          <Silk
            color="#7B7481"
            noiseIntensity={1.5}
            rotation={0}
            scale={1}
            speed={5}
          />
        </figure>
        <article className="relative z-40 flex flex-col gap-8">
          <h2 className="text-center text-5xl !font-bold !text-white">
            Assine nossa newsletter agora mesmo!
          </h2>
          <div className="mx-auto flex w-full max-w-[520px] items-center gap-4">
            <input className="bg-opacity-10 h-10 w-full rounded-md border border-neutral-200 bg-[#f5f5f733] bg-clip-padding px-4 text-sm !text-white outline-0 backdrop-blur-sm backdrop-filter" />
            <button className="bg-opacity-10 sticky inset-0 mx-auto w-fit cursor-pointer rounded-md border border-neutral-200 bg-[#f5f5f733] bg-clip-padding px-6 py-2 !text-white backdrop-blur-sm backdrop-filter">
              Assinar
            </button>
          </div>
        </article>
      </div>
    </section>
  )
}
