'use client'

import { Plus } from 'lucide-react'
import Image from 'next/image'
import * as React from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut
} from '@/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from '@/components/ui/sidebar'

export function TeamSwitcher({
  teams
}: {
  teams: {
    name: string
    logo: React.ElementType
    plan: string
  }[]
}) {
  const { isMobile } = useSidebar()
  const [activeTeam, setActiveTeam] = React.useState(teams[0])

  if (!activeTeam) {
    return null
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <SidebarMenuButton
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            size="lg"
          >
            <figure className="mx-auto h-10 w-10">
              <Image
                alt="IFSP Logo"
                className="h-10 w-10 object-cover"
                height={200}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Instituto_Federal_de_S%C3%A3o_Paulo_-_Marca_Vertical_2015.svg/2383px-Instituto_Federal_de_S%C3%A3o_Paulo_-_Marca_Vertical_2015.svg.png"
                width={200}
              />
            </figure>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{activeTeam.name}</span>
              <span className="truncate text-xs">{activeTeam.plan}</span>
            </div>
          </SidebarMenuButton>
          <DropdownMenuContent
            align="start"
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? 'bottom' : 'right'}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs">
              Teams
            </DropdownMenuLabel>
            {teams.map((team, index) => (
              <DropdownMenuItem
                className="gap-2 p-2"
                key={team.name}
                onClick={() => setActiveTeam(team)}
              >
                <figure className="mx-auto h-10 w-10">
                  <Image
                    alt="IFSP Logo"
                    className="h-10 w-10 object-cover"
                    height={200}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Instituto_Federal_de_S%C3%A3o_Paulo_-_Marca_Vertical_2015.svg/2383px-Instituto_Federal_de_S%C3%A3o_Paulo_-_Marca_Vertical_2015.svg.png"
                    width={200}
                  />
                </figure>
                {team.name}
                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2">
              <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                <Plus className="size-4" />
              </div>
              <div className="text-muted-foreground font-medium">Add team</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
