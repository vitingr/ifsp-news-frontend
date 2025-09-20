import type { IconProps } from '@/types/components/iconProps'

export const OutlineBookmark: React.FC<IconProps> = props => {
  return (
    <svg
      fill="none"
      height="22"
      viewBox="0 0 18 22"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.932617 0V22L9.33262 14.8L17.7326 22V0H0.932617ZM16.2326 18.8L9.33262 13L2.43262 18.8V1.6H16.1326L16.2326 18.8Z"
        fill="currentColor"
      />
    </svg>
  )
}
