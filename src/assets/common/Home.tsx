import type { IconProps } from '@/types/components/iconProps'

export const Home: React.FC<IconProps> = props => {
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
        d="M12.162 3.12a.25.25 0 0 0-.324 0l-7.25 6.152a.25.25 0 0 0-.088.191v9.787c0 .138.112.25.25.25h4a.25.25 0 0 0 .25-.25v-3.5c0-.966.784-1.75 1.75-1.75h2.5c.966 0 1.75.784 1.75 1.75v3.5c0 .138.112.25.25.25h4a.25.25 0 0 0 .25-.25V9.463a.25.25 0 0 0-.088-.19l-7.25-6.152Zm-1.294-1.143a1.75 1.75 0 0 1 2.264 0l7.25 6.152c.392.332.618.82.618 1.334v9.787A1.75 1.75 0 0 1 19.25 21h-4a1.75 1.75 0 0 1-1.75-1.75v-3.5a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25v3.5A1.75 1.75 0 0 1 8.75 21h-4A1.75 1.75 0 0 1 3 19.25V9.463c0-.514.226-1.002.618-1.334l7.25-6.152Z"
        fillRule="evenodd"
      ></path>
    </svg>
  )
}
