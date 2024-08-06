'use client'

import type { ReactNode } from 'react'

import { motion } from 'framer-motion'

import { SectionHeader } from '@/components/section-header'
import { SectionShell } from '@/components/section-shell'
import Link from 'next/link'

type ContactShellProps = {
  children: ReactNode
}

export const ContactShell = ({ children }: ContactShellProps) => (
  <SectionShell id='contact'>
    <SectionHeader heading='Contact' />

    <motion.section
      variants={{
        visible: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } },
      }}
      initial='hidden'
      whileInView='visible'
      exit='hidden'
      viewport={{ once: true }}
      className='mt-16 flex flex-1 flex-col gap-x-16 gap-y-24 md:ml-24 md:flex-row smooth'
    >
      <div className='md:w-1/2'>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { ease: 'circOut', duration: 0.5 } },
          }}
          className='col-span-full text-lg font-medium leading-relaxed text-dark-600 dark:text-dark-50 md:col-span-6 xl:col-span-8 smooth'
        >
          Contact me if you&apos;d like to connect at{' '}
          <Link
            href='mailto:larryly1@gmail.com'
            className='underline decoration-dark-200 underline-offset-[6px] hover:decoration-dark-300 dark:decoration-dark-500 dark:hover:decoration-dark-400'
          >
            larryly1@gmail.com
          </Link>{' '}
        </motion.p>
      </div>
      <motion.div
        variants={{
          visible: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } },
        }}
        initial='hidden'
        whileInView='visible'
        exit='hidden'
        viewport={{ once: true }}
        className='md:w-1/2'
      >
        {children}
      </motion.div>
    </motion.section>
  </SectionShell>
)
