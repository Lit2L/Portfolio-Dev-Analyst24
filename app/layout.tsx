import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

import localFont from 'next/font/local'

import clsx from 'clsx'
import { getAge } from '@utils/get-age'
import { Kanit } from 'next/font/google'
import { Footer } from '@components/footer'
import { MobileNav } from '@components/mobile-navigation'
import { Navigation } from '@components/navigation'
import '../styles/tailwind.css'
import './globals.css'
import { Providers } from '@providers'

const epilogue = localFont({
  src: [
    {
      path: '../public/assets/Epilogue-VariableFont_wght.ttf',
      style: 'normal',
    },
    {
      path: '../public/assets/Epilogue-Italic-VariableFont_wght.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-epilogue',
  display: 'swap',
})

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['200', '400', '600', '700', '800', '900'],
  display: 'swap',
})
export const metadata: Metadata = {
  title: 'Larry Ly - Frontend developer',
  description: `I'm a self-taught designer & frontend developer, focused on user experience, accessibility and modern web technologies.`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='scroll-p-32 scroll-smooth' suppressHydrationWarning>
      <body
        className={clsx(
          'dark:bg-radial bg-conic text-dark-600 transition-colors duration-300 ease-in-out dark:text-dark-50',
          epilogue.className,
          kanit.className
        )}
      >
        <Providers>
          <Navigation />
          <MobileNav />
          {children}
          <Analytics />
          <Footer />
        </Providers>

        <Analytics />
      </body>
    </html>
  )
}
