import type { FC } from 'react'

import type { ErrorFieldProps } from './types'

export const ErrorField: FC<ErrorFieldProps> = ({
  errorMessage,
  centered = false,
  className,
  ...props
}) => {
  return (
    !!errorMessage && (
      <label
        className={`text-body-sm ${className} ${centered ? 'mx-auto' : ''}`}
        {...props}
      >
        <p className="text-red-600">{errorMessage}</p>
      </label>
    )
  )
}
