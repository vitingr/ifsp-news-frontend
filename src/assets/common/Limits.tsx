import type { IconProps } from '@/types/components/iconProps'

export const Limits: React.FC<IconProps> = props => {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M6.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM10 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM13.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z"></path>
      <path
        clipRule="evenodd"
        d="M6.5 9.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm3.5 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm3.5 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-7-.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM10 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm3-.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Z"
        fillRule="evenodd"
      ></path>
      <path
        clipRule="evenodd"
        d="M2 5.75C2 4.784 2.784 4 3.75 4h16.5c.966 0 1.75.784 1.75 1.75v6.5a.75.75 0 0 1-1.5 0v-6.5a.25.25 0 0 0-.25-.25H3.75a.25.25 0 0 0-.25.25v13.5c0 .138.112.25.25.25h8.5a.75.75 0 0 1 0 1.5h-8.5A1.75 1.75 0 0 1 2 19.25V5.75Zm11.47 7.72a.75.75 0 0 1 .75-.187l7 2.154a.75.75 0 0 1 .115 1.388l-3.007 1.503-1.503 3.007a.75.75 0 0 1-1.388-.114l-2.154-7a.75.75 0 0 1 .187-.751Zm1.663 1.663 1.187 3.857.778-1.556a.75.75 0 0 1 .336-.336l1.556-.778-3.856-1.187Z"
        fillRule="evenodd"
      ></path>
    </svg>
  )
}
