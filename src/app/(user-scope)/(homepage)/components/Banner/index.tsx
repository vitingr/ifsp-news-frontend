'use client'

import type { FC } from 'react'

import Silk from '@/components/Silk'

export const Banner: FC = () => {
  return (
    <section className="w-full px-4 py-12 lg:py-16 xl:px-0">
      <div className="relative mx-auto h-[450px] w-full max-w-2xl rounded-xl lg:max-w-7xl">
        <figure className="silk-banner absolute h-full w-full rounded-xl">
          <Silk
            color="#7B7481"
            noiseIntensity={1.5}
            rotation={0}
            scale={1}
            speed={5}
          />
        </figure>
      </div>
    </section>
  )
}
