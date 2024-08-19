'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiDownload } from 'react-icons/hi'
import { linkVariants, navVariants } from '@/components/navigation'
import { ThemeToggleButton } from '@/components/theme-toggle-button'
import Image from 'next/image'

const AnimatedLink = motion(Link)
AnimatedLink.defaultProps = { className: 'hover:text-primary-brand nav-link font-bold' }

export function Navigation() {
  return (
    <motion.header
      variants={navVariants}
      initial='hidden'
      animate='visible'
      className='container h-20 fixed inset-x-0 top-0 z-50 hidden w-full items-center justify-between md:flex'
    >
      <AnimatedLink href='/#' variants={linkVariants} className=''>
        <p className='font-karantina'>Larry||_</p>
      </AnimatedLink>

      <nav className='flex items-center justify-center gap-x-6 text-xs font-montserrat'>
        <AnimatedLink href='/#about' variants={linkVariants}>
          About
        </AnimatedLink>
        <AnimatedLink href='/#work' variants={linkVariants}>
          Work
        </AnimatedLink>
        <AnimatedLink href='/#hackathons' variants={linkVariants}>
          Hackathons
        </AnimatedLink>
        <AnimatedLink href='/#applications' variants={linkVariants}>
          My Apps
        </AnimatedLink>

        <a
          className='group bg-slate-700 text-white text-xs px-3 py-2 flex items-center gap-2 rounded-lg outline-none focus:scale-95 hover:scale-95 active:scale-95 transition cursor-pointer border-black dark:bg-white/10'
          href='/assets/LarryLy-CV.pdf'
          download
        >
          Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
        </a>

        <motion.div variants={linkVariants}>
          <ThemeToggleButton />
        </motion.div>
      </nav>
    </motion.header>
  )
}
