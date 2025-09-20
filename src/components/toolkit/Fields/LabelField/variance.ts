import { cva } from 'class-variance-authority'

export const labelVariants = cva(['my-1', 'text-left'], {
  variants: {
    variant: {
      primary: ['text-neutral-700'],
      secondary: ['text-neutral-700'],
      tertiary: ['text-neutral-50']
    },
    error: {
      true: ['border-2', 'border-red-400'],
      false: []
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})
