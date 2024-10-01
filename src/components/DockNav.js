'use client';

import Link from 'next/link'
import { Dock, DockIcon } from '@/components/ui/dock'
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

export default function DockNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 sm:hidden">
      <Dock>
        {navItems.map((item, index) => (
          <Link key={index} href={item.href}>
            <DockIcon>
              <item.icon className="w-6 h-6" />
            </DockIcon>
          </Link>
        ))}
      </Dock>
    </nav>
  )
}