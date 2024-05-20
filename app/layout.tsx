import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

import localFont from 'next/font/local'
import clsx from 'clsx'
import { Kanit } from 'next/font/google'
import { Footer } from '@components/footer'
import { MobileNav } from '@components/mobile-navigation'
import { Navigation } from '@components/navigation'
import './styles/globals.css'
import './styles/tailwind.css'
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
  title: 'Larry Ly - Front-end developer',
  description: `I'm a self-taught designer & front-end developer, focused on user experience, accessibility and modern web technologies.`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='scroll-p-32 scroll-smooth' suppressHydrationWarning>
      <body
        className={clsx(
          'dark:bg-radial bg-powder font-epilogue dark:text-dark-50 ',
          epilogue.className,
          kanit.className
        )}
      >
        <Providers>
          <Navigation />
          <MobileNav />
          <div className=''>{children}</div>
          <Analytics />
          <Footer />

          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
