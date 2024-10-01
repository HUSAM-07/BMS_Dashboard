'use client';

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Home, ClipboardList, Hash, Globe, GitBranch, Flag, ThumbsUp } from 'lucide-react'

const navItems = [
  { icon: Home, href: '/', label: 'Home' },
  { icon: ClipboardList, href: '/tasks', label: 'Tasks' },
  { icon: Hash, href: '/sponsorship', label: 'Sponsorship' },
  { icon: Globe, href: '/tools', label: 'Internal Tools' },
  { icon: GitBranch, href: '/accomplishments', label: 'Accomplishments' },
  { icon: Flag, href: '/assets', label: 'Creative Assets' },
  { icon: ThumbsUp, href: '/feedback', label: 'Feedback' },
]

export default function MainNav() {
  const pathname = usePathname()

  return (
    <NavigationMenu className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <NavigationMenuList>
        {navItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === item.href}>
                <item.icon className="w-4 h-4 mr-2" />
                {item.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}