import { Inter } from 'next/font/google'
import './globals.css'
import MainNav from '@/components/MainNav'

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
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}