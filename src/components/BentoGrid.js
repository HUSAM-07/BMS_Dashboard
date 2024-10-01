import React from 'react'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { ClipboardList, Hash, Globe, GitBranch, Flag, ThumbsUp } from 'lucide-react'

const bentoItems = [
  {
    title: 'Tasks to do',
    description: 'Use Jambo for analyze and engage with user feedback & valuable insights.',
    icon: ClipboardList,
    className: 'md:col-span-2',
    link: '/tasks'  // This should now correctly link to the new Tasks page
  },
  {
    title: 'Sponsorship Database',
    description: 'Use Jambo for analyzing user feedback & valuable insights',
    icon: Hash,
    className: 'md:col-span-1',
    link: '/sponsorship'
  },
  {
    title: 'Internal Tools',
    description: 'Use Jambo for analyzing user feedback & valuable insights',
    icon: Globe,
    className: 'md:col-span-1',
    link: '/tools'
  },
  {
    title: 'Accomplishments',
    description: 'Use Jambo for analyzing user feedback & valuable insights',
    icon: GitBranch,
    className: 'md:col-span-1',
    link: '/accomplishments'
  },
  {
    title: 'Creative Assets',
    description: 'Use Jambo for analyzing user feedback & valuable insights',
    icon: Flag,
    className: 'md:col-span-1',
    link: '/assets'
  },
  {
    title: 'Feedback from Advisors',
    description: 'Use Jambo for analyze and engage with user feedback & valuable insights.',
    icon: ThumbsUp,
    className: 'md:col-span-1',
    link: '/feedback'
  },
]

const BentoItem = React.memo(({ item }) => (
  <Card className={item.className}>
    <Link href={item.link || '#'} className="block h-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <item.icon className="w-6 h-6 mr-2" />
          {item.title}
        </CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
    </Link>
  </Card>
))

export default function BentoGrid() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-2">BMS DASHBOARD</h1>
      <h2 className="text-3xl text-center mb-8">
        This is an internal dashboard for
        <br />
        <span className="text-blue-600">BITS Motorsports Team</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {bentoItems.map((item, index) => (
          <BentoItem key={index} item={item} />
        ))}
      </div>
    </div>
  )
}