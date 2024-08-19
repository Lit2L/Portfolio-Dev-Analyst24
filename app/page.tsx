'use client'

import { ContactForm } from '@/components/contact-form'
import { About } from '@/templates/about'
import { ContactShell } from '@/templates/contact-shell'
import { Hero } from '@/templates/hero'
import { Applications } from '@/templates/applications'
import { useEffect } from 'react'
import { Work } from './templates/work'
import { Hackathons } from './templates/hackathons'
import { Certifications } from './templates/certifications'
import { StarsBackground } from './components/ui/stars-background'
import { ShootingStars } from './components/ui/shooting-stars'

export default function Index() {
  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])

  return (
    <main className='scrollbar-thin scrollbar-thumb-900 scrollbar-track-gray-100 max-w-2xl mx-auto flex flex-col '>
      <Hero />

      <About />
      <Work />
      <Hackathons />
      <Certifications />
      <Applications />
    </main>
  )
}
