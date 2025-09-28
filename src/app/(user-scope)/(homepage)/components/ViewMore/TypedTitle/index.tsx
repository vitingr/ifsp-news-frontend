'use client'

import { ReactTyped } from 'react-typed'

export const TypedTitle: React.FC = () => {
  return (
    <ReactTyped
      backDelay={3000}
      className="text-center text-2xl font-medium lg:text-4xl"
      fadeOut={true}
      fadeOutDelay={200}
      strings={['Nunca mais fique de fora!']}
      typeSpeed={100}
      loop
    />
  )
}
