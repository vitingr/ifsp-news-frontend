import type { IconProps } from '@/types/components/iconProps'

export const Check: React.FC<IconProps> = props => {
  return (
    <svg
      fill="none"
      height="16"
      viewBox="0 0 24 16"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1.5 7L9.5 15M1.5 7L9.5 15" stroke="#fff" strokeWidth="1.6" />
      <path d="M8.5 15L22.5 1" stroke="#fff" strokeWidth="1.6" />
    </svg>
  )
}
