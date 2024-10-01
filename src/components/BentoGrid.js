import React from 'react'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from "@/lib/utils"
import { bentoItems } from '@/lib/content'

const BentoItem = React.memo(({ item }) => (
  <Card className={cn("transition-all hover:scale-105", item.className)}>
    <CardHeader>
      <CardTitle className="flex items-center text-base sm:text-lg">
        <item.icon className="w-5 h-5 mr-2" />
        {item.title}
      </CardTitle>
      <CardDescription className="text-xs sm:text-sm">{item.description}</CardDescription>
    </CardHeader>
    <CardFooter>
      <Link href={item.link} passHref className="w-full">
        <Button variant="outline" className="w-full">Go to Page</Button>
      </Link>
    </CardFooter>
  </Card>
))

export default function BentoGrid() {
  return (
    <div className="container mx-auto px-4 py-8 bg-white rounded-lg">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2">BMS DASHBOARD</h1>
      <h2 className="text-lg sm:text-xl md:text-2xl text-center mb-8">
        This is an internal dashboard for
        <br />
        <span className="text-blue-600">BITS Motorsports Team</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {bentoItems.map((item, index) => (
          <BentoItem key={index} item={item} />
        ))}
      </div>
    </div>
  )
}