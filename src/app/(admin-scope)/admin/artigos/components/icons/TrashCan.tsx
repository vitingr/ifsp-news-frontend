import type { IconProps } from '@/types/components/iconProps'

export const TrashCan: React.FC<IconProps> = props => {
  return (
    <svg
      fill="none"
      height="24"
      viewBox="0 0 20 24"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.5 4.60001H18.4H14.5V3.40001C14.5 1.90001 13.3 0.700012 11.8 0.700012H8C6.5 0.700012 5.3 1.90001 5.3 3.40001V4.60001H1.6H0.5V6.10001H1.7L2.5 20.8C2.6 22.2 3.7 23.3 5.1 23.3H14.9C16.3 23.3 17.5 22.2 17.5 20.8L18.3 6.10001H19.5V4.60001ZM6.9 3.40001C6.9 2.80001 7.4 2.20001 8.1 2.20001H11.9C12.5 2.20001 13.1 2.70001 13.1 3.40001V4.60001H6.9V3.40001ZM16 20.7C16 21.3 15.5 21.8 14.9 21.8H5.1C4.5 21.8 4 21.3 4 20.7L3.2 6.10001H5.5H14.6H16.9L16 20.7ZM9.2 8.20001H10.7V19.7H9.2V8.20001ZM13.1 8.20001H14.6V19.7H13.1V8.20001ZM5.4 8.20001H6.9V19.7H5.4V8.20001Z"
        fill="currentColor"
      />
    </svg>
  )
}
