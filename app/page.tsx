'use client'

import { ContactForm } from '@/components/contact-form'
import { About } from '@/templates/about'
import { ContactShell } from '@/templates/contact-shell'
import { Hero } from '@/templates/hero'
import { Projects } from '@/templates/projects'
import { useEffect } from 'react'

export default function Index() {
  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])

  return (
    <main className='scrollbar-thin overflow-y-scroll scrollbar-thumb-900 scrollbar-track-gray-100'>
      <div className='mt-12'>
        <Hero />
      </div>
      <Projects />
      <About />
      <ContactShell>
        <ContactForm />
      </ContactShell>
    </main>
  )
}
