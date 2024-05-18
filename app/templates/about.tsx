'use client'

import { motion } from 'framer-motion'
import { IoLogoFigma } from 'react-icons/io5'
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
        className='gap-y-10 md:ml-24 md:gap-x-8 lg:gap-x-16 relative grid grid-cols-12 mt-16'
      >
        <AnimatedText
          as='p'
          className='col-span-full text-dark-400 dark:text-dark-100 md:col-span-6 xl:col-span-8 text-lg font-bold leading-relaxed'
          text='Always working on something, Always a work in progress.'
        />
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
              className='text-sm uppercase tracking-wider text-dark-200 dark:text-dark-400'
            />
            <AnimatedText
              as='p'
              text="I'm Larry and I'm a self-taught applications developer with a background in data analytics."
              className='text-dark-400 dark:text-dark-200 mt-6 text-lg font-light leading-relaxed'
            />
            <AnimatedText
              as='p'
              text="I started out my career packaging envelopes for an escrow company.  It's been over a decade since those days and I've worked as a data analyst for large companies like First American Title and Zillow Group.  For the past two years I've dedicated all my time learning computer science and delivering web applications for clients."
              className='text-dark-400 dark:text-dark-200 mt-6 text-lg font-light leading-relaxed'
            />
            <AnimatedText
              as='p'
              text="The journey through learning to code has helped me grow in every part of my life. I'm looking forward to tackling more challenges and delivering better and better applications. Thanks for visiting"
              className='text-dark-400 dark:text-dark-200 mt-6 text-lg font-light leading-relaxed'
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
              text='Tech I enjoy'
              className='text-sm uppercase tracking-wider text-dark-200 dark:text-dark-400'
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
              className='mt-6 flex flex-wrap gap-6 text-dark-300'
            >
              <IoLogoFigma size={28} title='Figma' />
              <SiNeovim size={28} title='Neovim' />
              <SiTypescript size={28} title='TypeScript' />
              <SiReact size={28} title='React.js' />
              <SiNextdotjs size={28} title='Next.js' />
              <SiTailwindcss size={28} title='TailwindCSS' />
              <SiPrisma size={28} title='Prisma' />
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
