import type { FC, PropsWithChildren } from 'react'

import { AppSidebar } from '@/components/app-sidebar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList
} from '@/components/ui/breadcrumb'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from '@/components/ui/sidebar'
import { Separator } from '@radix-ui/react-separator'

const AdminLayout: FC<PropsWithChildren> = async ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="mx-auto flex h-16 w-full max-w-2xl shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 lg:max-w-7xl">
          <div className="flex items-center gap-1 px-4 2xl:pr-4 2xl:pl-0">
            <SidebarTrigger className="-ml-1" />
            <Separator
              className="mr-2 data-[orientation=vertical]:h-4"
              orientation="vertical"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Admin</BreadcrumbLink>
                </BreadcrumbItem>
                {/* <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem> */}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default AdminLayout
