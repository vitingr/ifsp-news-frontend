import { forwardRef } from 'react'

import { Input } from '../../Input'
import { ErrorField } from '../ErrorField'
import { LabelField } from '../LabelField'
import type { InputFieldProps } from './types'

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      id,
      label,
      errorMessage,
      required,
      variant,
      removeLabel = false,
      ...props
    },
    ref
  ) => {
    return (
      <fieldset
        className="flex w-full flex-col gap-2 sm:w-auto"
        data-cid="input-field"
      >
        {removeLabel ? null : (
          <LabelField
            id={id}
            isRequired={required}
            label={label}
            variant={variant}
          />
        )}

        <Input
          error={!!errorMessage}
          id={id}
          ref={ref}
          variant={variant}
          {...props}
        />

        <ErrorField errorMessage={errorMessage} />
      </fieldset>
    )
  }
)

InputField.displayName = 'InputField'
