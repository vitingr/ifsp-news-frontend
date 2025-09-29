import type { IconProps } from '@/types/components/iconProps'

export const GlassMagnifying: React.FC<IconProps> = props => {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M11 4.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM3 11a8 8 0 1 1 14.162 5.102l3.618 3.618a.75.75 0 1 1-1.06 1.06l-3.618-3.618A8 8 0 0 1 3 11Z"
        fillRule="evenodd"
      ></path>
    </svg>
  )
}
