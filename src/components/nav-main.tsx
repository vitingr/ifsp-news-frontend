'use client'

import { ChevronRight, type LucideIcon } from 'lucide-react'

import { Articles } from '@/assets/common/Articles'
import { Categories } from '@/assets/common/Categories'
import { People } from '@/assets/common/People'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem
} from '@/components/ui/sidebar'

export const ICONS = [
  <Articles className="h-4 w-4 fill-neutral-500" key="articles-icon" />,
  <Categories className="h-4 w-4 fill-neutral-500" key="categories-icon" />,
  <People className="h-4 w-4 fill-neutral-500" key="people-icon" />
]

export function NavMain({
  items
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Painel de Admin</SidebarGroupLabel>
      <SidebarMenu>
        {items.map(item => (
          <Collapsible
            className="group/collapsible"
            defaultOpen={item.isActive}
            key={item.title}
            asChild
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem, index: number) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <a
                          className="flex items-center gap-2"
                          href={subItem.url}
                        >
                          {ICONS[index]}
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
