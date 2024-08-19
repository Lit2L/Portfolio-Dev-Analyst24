'use client'

import { About } from '@/templates/about'
import { Hero } from '@/templates/hero'
import { Applications } from '@/templates/applications'
import { useEffect } from 'react'
import { Work } from './templates/work'
import { Hackathons } from './templates/hackathons'
import { Certifications } from './templates/certifications'

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
