import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Epilogue, Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'
import { Kanit } from 'next/font/google'
import { Footer } from '@/components/footer'
import { MobileNav } from '@/components/mobile-navigation'
import { Navigation } from '@/components/navigation'
import './styles/globals.css'
import './styles/tailwind.css'
import './styles/gradients.css'
import { ThemeProvider } from '@/components/theme-provider'
import { ShootingStars } from './components/ui/shooting-stars'
import { StarsBackground } from './components/ui/stars-background'
import Navbar from './components/navbar'
import { TooltipProvider } from './components/ui/tooltip'

const epilogue = Epilogue({
  subsets: ['latin'],
  variable: '--font-epilogue',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Larry Ly - Front-end developer',
  description: `I'm a designer & developer, focused on user experience, accessibility and modern web technologies.`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={clsx(
          'font-epilogue min-h-screen dark:text-dark-50 mx-auto max-w-md md:max-w-5xl ',
          epilogue.className,
          montserrat.variable
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
          <TooltipProvider delayDuration={0}>
            <Navigation />
            <MobileNav />
            <Navbar />
            <div className=''>{children}</div>
            <Analytics />
            <Footer />

            <Analytics />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
