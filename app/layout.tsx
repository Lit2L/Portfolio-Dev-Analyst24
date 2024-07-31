import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Epilogue } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'
import { Kanit } from 'next/font/google'
import { Footer } from '@components/footer'
import { MobileNav } from '@components/mobile-navigation'
import { Navigation } from '@components/navigation'
import './styles/globals.css'
import './styles/tailwind.css'
import './styles/gradients.css'
import { ThemeProvider } from '@components/theme-provider'

const epilogue = Epilogue({
  subsets: ['latin'],
  variable: '--font-epilogue',
  display: 'swap',
})

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['200', '400', '600', '700', '800', '900'],
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
          'dark:bg-radial bg-powder font-epilogue dark:text-dark-50 ',
          epilogue.className,
          kanit.className
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <MobileNav />
          <div className=''>{children}</div>
          <Analytics />
          <Footer />

          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
