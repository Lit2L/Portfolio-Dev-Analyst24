import { ContactForm } from '@components/contact-form'
import { About } from '@templates/about'
import { ContactShell } from '@templates/contact-shell'
import { Hero } from '@templates/hero'
import { Projects } from '@templates/projects'

export default function HomePage() {
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
