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
  SiVercel,
  SiAmazons3,
  SiAmazonaws,
  SiMysql,
  SiPostgresql,
  SiMicrosoftsqlserver,
} from 'react-icons/si'

import { AnimatedText } from '@components/animated-text'
import { SectionHeader } from '@components/section-header'
import { SectionShell } from '@components/section-shell'
import Image from 'next/image'
import { useMounted } from '@hooks/use-mounted'
import { useTheme } from '@hooks/use-theme'
import { cn } from '@utils/cn'
import { MotionLinkButton } from '@components/link-button'
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
        {/* <Quote size={28} className='ml-3 sm:ml-12' />
        <AnimatedText
          as='p'
          className='text-raisin dark:text-dark-200 text-lg font-semibold leading-relaxed px-6 '
          text='Becoming is better than being.'
        />
        <Quote size={28} className='' /> */}
        {/* <MotionLinkButton
          href='/about'
          motionProps={{
            variants: {
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { ease: 'circOut', duration: 0.5 } },
            },
          }}
          className='col-span-full md:col-start-7 xl:col-start-9'
        >
          More about me
        </MotionLinkButton> */}
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
              as='p'
              text="I'm a developer with a background in data management. The past few years I've been working on app development focusing on developing full-stack applications."
              className=' dark:text-dark-200 mt-6 text-lg font-light font-kanit leading-relaxed'
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
              <div className='flex flex-col items-center justify-center text-[#004E8F] dark:tsx-gradient'>
                <SiTypescript size={28} title='TypeScript' className=' transition' />
                <span className='text-[10px] text-dark-500'>Typescript</span>
              </div>

              <div className='flex flex-col  items-center justify-center react-gradient'>
                <SiReact size={28} title='React.js' className='transition' />
                <span className='text-[10px] text-dark-500 '>React</span>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <SiNextdotjs size={28} title='Next.js' className='text-[#000000]  transition' />
                <span className='text-[10px] text-dark-500 '>Next.js</span>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <SiTailwindcss size={28} title='TailwindCSS' className='tsx-gradient  transition' />
                <span className='text-[10px] text-dark-500'>TailwindCSS</span>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <SiVercel
                  size={28}
                  title='Vercel'
                  className='hover:text-black transition vercel-gradient'
                />
                <span className='text-[10px] text-dark-500 '>Vercel</span>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <SiAmazons3 size={28} title='S3' className='text-[#44892C]' />
                <span className='text-[10px] text-dark-500 '>S3</span>
              </div>

              <div className='flex flex-col items-center justify-center '>
                <SiPrisma
                  size={28}
                  title='Prisma'
                  className='hover:text-cyan-500 transition prisma-gradient'
                />
                <span className='text-[10px] text-dark-500 '>Prisma</span>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <SiMicrosoftsqlserver
                  size={28}
                  title='SqlServer'
                  className='hover:text-red-500 transition sqlserver-gradient'
                />
                <span className='text-[10px] text-dark-500'>SQL-Server</span>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <SiMysql size={28} title='MySQL' className='mysql-gradient' />
                <span className='text-[10px] text-dark-500'>MySQL</span>
              </div>
              <div className='flex flex-col items-center justify-center postgresql-gradient'>
                <SiPostgresql size={28} title='PostgreSQL' className=' text-[#336791]' />
                <span className='text-[10px] text-dark-500'>PostgreSQL</span>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <IoLogoFigma size={28} title='Figma' className='transition figma-gradient' />
                <span className='text-[10px] text-dark-500 '>Figma</span>
              </div>
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
            'mb-6 self-start md:col-span-full md:col-start-7 md:mb-0 md:w-full xl:col-start-9 relative aspect-square rounded-full w-3/4 opacity-80 mx-auto',
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
            quality={85}
            src='/assets/LarryProfileNoBackground.png'
            alt='Portrait of Larry Ly'
            loading='lazy'
            className=' w-1/2'
          />
        </motion.figure>
      </section>
    </SectionShell>
  )
}
