import { Inter } from 'next/font/google'
import './globals.css'
import MainNav from '@/components/MainNav'
import DockNav from '@/components/DockNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BMS Dashboard',
  description: 'Internal dashboard for BITS Motorsports Team',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNav />
        <main className="container mx-auto p-4 pt-20 pb-24">
          {children}
        </main>
        <DockNav />
      </body>
    </html>
  )
}