'use client'

import { motion } from 'framer-motion'
import { IoLogoFigma } from 'react-icons/io5'
import { Minus, Quote } from 'lucide-react'
import {
  SiNeovim,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

import { AnimatedText } from '@components/animated-text'
import { SectionHeader } from '@components/section-header'
import { SectionShell } from '@components/section-shell'
import Image from 'next/image'
import { useMounted } from '@hooks/use-mounted'
import { useTheme } from '@hooks/use-theme'
import { cn } from '@utils/cn'
const MotionImage = motion(Image)

export const About = () => {
  const { theme } = useTheme()
  const mounted = useMounted()

  if (!mounted) return null
  return (
    <SectionShell id='about'>
      <SectionHeader heading='About' />

      <motion.section
        variants={{
          visible: { transition: { staggerChildren: 0.25 } },
        }}
        initial='hidden'
        whileInView='visible'
        exit='hidden'
        viewport={{ once: true }}
        className='flex px-6 mt-12 justify-start smooth items-center relative'
      >
        {/* <Minus className='ml-12' size={24} /> */}
        <Quote size={28} className='ml-3 sm:ml-12' />
        <AnimatedText
          as='p'
          className='text-raisin dark:text-dark-200 text-lg font-semibold leading-relaxed px-6 '
          text='Becoming is better than being.'
        />
        <Quote size={28} className='' />
        {/* <MotionLinkButton */}
        {/*   href='/about' */}
        {/*   motionProps={{ */}
        {/*     variants: { */}
        {/*       hidden: { opacity: 0, y: 50 }, */}
        {/*       visible: { opacity: 1, y: 0, transition: { ease: 'circOut', duration: 0.5 } }, */}
        {/*     }, */}
        {/*   }} */}
        {/*   className='col-span-full md:col-start-7 xl:col-start-9' */}
        {/* > */}
        {/*   More about me */}
        {/* </MotionLinkButton> */}
      </motion.section>
      <section className='relative mt-24 flex grid-cols-12 flex-col-reverse gap-y-10 md:ml-24 md:grid md:gap-x-8 lg:gap-x-16'>
        <section className='col-span-full md:col-span-6 xl:col-span-8'>
          <motion.article
            variants={{
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } },
            }}
            initial='hidden'
            whileInView='visible'
            exit='hidden'
            viewport={{ once: true }}
          >
            <AnimatedText
              as='h3'
              text='Who am I'
              className='text-sm uppercase tracking-widest text-raisin dark:text-dark-400'
            />
            <AnimatedText
              as='p'
              text="I'm Larry, I'm a self-taught developer with a background in data analytics. The past year I've been working on my coding skills with an emphasis on front-end development and app design."
              className='text-dark-800  dark:text-dark-500 mt-6 text-md font-light font-kanit leading-relaxed'
            />
            <AnimatedText
              as='h3'
              text="How'd I get here?"
              className='text-sm uppercase tracking-wider text-raisin dark:text-dark-400 my-6'
            />
            <AnimatedText
              as='p'
              text="My career path was a little unconventional. I started out my career when a temp agency hired me to package envelopes for an escrow company. A decade plus later and I've been fortunate to work as a data analyst for great companies like First American Title and Zillow.  I took my tutorial training wheels off about a year ago and since then I've delivered and deployed three production level applications for local businesses."
              className='text-dark-900 dark:text-dark-200 mt-6 text-md font-light font-kanit leading-relaxed'
            />
          </motion.article>

          <motion.section
            variants={{
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } },
            }}
            initial='hidden'
            whileInView='visible'
            exit='hidden'
            viewport={{ once: true }}
            className='col-span-full mt-14 overflow-hidden md:col-span-6 xl:col-span-8'
          >
            <AnimatedText
              as='h3'
              text='Tech I love using'
              className='text-sm uppercase tracking-wide text-raisin dark:text-dark-400'
            />
            <motion.div
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, ease: 'circOut' },
                },
              }}
              className='mt-6 flex flex-wrap gap-6 text-dark-800'
            >
              <IoLogoFigma
                size={28}
                title='Figma'
                className='text-figma-gradient hover:text-radial text-powder bg-clip-text transition'
              />
              <SiNeovim size={28} title='Neovim' className='hover:text-blue-500 transition' />
              <SiTypescript
                size={28}
                title='TypeScript'
                className='hover:text-blue-500 transition'
              />
              <SiReact size={28} title='React.js' className='hover:text-blue-500 transition' />
              <SiNextdotjs size={28} title='Next.js' className='hover:text-blue-500 transition' />
              <SiTailwindcss
                size={28}
                title='TailwindCSS'
                className='hover:text-blue-500 transition'
              />
              <SiPrisma size={28} title='Prisma' className='hover:text-blue-500 transition' />
            </motion.div>
          </motion.section>
        </section>

        <motion.figure
          variants={{
            hidden: { scaleX: 0, originX: 0 },
            visible: {
              scaleX: 1,
              opacity: 1,
              transition: {
                duration: 0.75,
                ease: [0.9, 0.1, 0.3, 0.96],
                when: 'beforeChildren',
                delayChildren: 0.15,
                delay: 0.25,
              },
            },
          }}
          initial='hidden'
          whileInView='visible'
          exit='hidden'
          viewport={{ once: true }}
          className={cn(
            'mb-6 w-2/3 self-start md:col-span-full md:col-start-7 md:mb-0 md:w-full xl:col-start-9 relative aspect-square rounded-full',
            {
              'bg-dark-100': theme === 'light',
              'bg-[#333333]': theme === 'dark',
            }
          )}
        >
          <MotionImage
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.5, ease: [0.6, 0.5, 0.5, 0.9] },
              },
            }}
            fill
            quality={95}
            src='/assets/LarryProfileNoBackground.png'
            alt='Portrait of Larry Ly'
            loading='lazy'
            className=''
          />
        </motion.figure>
      </section>
    </SectionShell>
  )
}
