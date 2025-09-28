import type { IconProps } from '@/types/components/iconProps'

export const Categories: React.FC<IconProps> = props => {
  return (
    <span>
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          clipRule="evenodd"
          d="M2 5.75C2 4.784 2.784 4 3.75 4h16.5c.966 0 1.75.784 1.75 1.75v12.5A1.75 1.75 0 0 1 20.25 20H3.75A1.75 1.75 0 0 1 2 18.25V5.75Zm1.75-.25a.25.25 0 0 0-.25.25v5.5h17v-5.5a.25.25 0 0 0-.25-.25H3.75Zm16.75 7.25h-17v5.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25v-5.5Z"
          fillRule="evenodd"
        ></path>
        <path d="M7 8.375a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 7.25a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"></path>
        <path
          clipRule="evenodd"
          d="M7.5 8.375a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 7.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1-6.75a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm0 7.25a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
          fillRule="evenodd"
        ></path>
      </svg>
    </span>
  )
}
