import { Inter } from 'next/font/google'
import './globals.css'
import MainNav from '@/components/MainNav'
import Footer from '@/components/Footer'
import { AuthProvider } from '@/components/auth/AuthProvider'
import { Toaster } from "sonner"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BMS Dashboard',
  description: 'Internal dashboard for BITS Motorsports Team',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <MainNav />
            <main className="flex-grow pt-16">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}