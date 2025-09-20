import { forwardRef } from 'react'

import type { InputProps } from './types'
import { inputVariants } from './variance'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant, error, className, id, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          className={inputVariants({
            variant,
            error,
            className
          })}
          id={id}
          ref={ref}
          {...props}
        />

        {error && (
          <div className="absolute top-1/2 right-4 flex -translate-y-1/2 items-center justify-center">
            <span className="text-tag flex size-5 items-center justify-center rounded-full bg-red-500 font-bold text-white">
              !
            </span>
          </div>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
