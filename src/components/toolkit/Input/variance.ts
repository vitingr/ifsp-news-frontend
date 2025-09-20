import { cva } from 'class-variance-authority'

export const inputVariants = cva(
  [
    'rounded-sm',
    'duration-300',
    'transition-all',
    'p-2.5',
    'text-[15px]',
    'outline-none',
    'ring-0',
    'w-full'
  ],
  {
    variants: {
      variant: {
        primary: [
          'placeholder:text-neutral-500',
          'text-neutral-700',
          'bg-white',
          'disabled:bg-neutral-50',
          'disabled:cursor-not-allowed',
          'disabled:opacity-70'
        ],
        secondary: [
          'placeholder:text-neutral-500',
          'text-neutral-700',
          'bg-white',
          'disabled:bg-neutral-50',
          'disabled:cursor-not-allowed',
          'disabled:opacity-70',
          'border',
          'border-neutral-300',
          'hover:border-neutral-400'
        ],
        tertiary: [
          'h-full',
          'border',
          'bg-gray-200',
          'bg-opacity-20',
          'bg-clip-padding',
          'py-2',
          'text-neutral-50',
          'placeholder-neutral-50',
          'backdrop-blur-sm',
          'backdrop-filter',
          'autofill:transparent',
          'autofill:bg-opacity-20'
        ]
      },
      error: {
        true: [],
        false: []
      }
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
)
