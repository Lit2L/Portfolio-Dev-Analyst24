'use client'

import { motion } from 'framer-motion'
import { IoLogoFigma } from 'react-icons/io5'
import { FileIcon, Minus, Quote } from 'lucide-react'
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
  SiRedhatopenshift,
  SiAwsorganizations,
  SiFirebase,
} from 'react-icons/si'

import { AnimatedText } from '@/components/animated-text'
import { SectionHeader } from '@/components/section-header'
import { SectionShell } from '@/components/section-shell'
import Image from 'next/image'
import { useMounted } from '@/hooks/use-mounted'
import { useTheme } from '@/hooks/use-theme'
import { cn } from '@/utils/cn'
import { MotionLinkButton } from '@/components/link-button'
import { IconBrandAws, IconFileFunction } from '@tabler/icons-react'

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
        className=' mt-12 justify-center w-full smooth items-center relative flex '
      >
        <section className='w-4/6 flex flex-col gap-6 mr-6'>
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
              text='A passionate data developer with 7+ years of experience in data governance, data warehousing, data integration and ETL/ELT processes. Seeking roles to  challenge my role in data development.'
              className=' dark:text-dark-200 mt-6 text-md font-light font-sans leading-relaxed'
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
            className='col-span-full overflow-hidden md:col-span-6 xl:col-span-8 mt-12'
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
                <IconFileFunction size={28} title='TypeScript' className=' transition' />
                <span className='text-[10px] text-dark-400'>FTP</span>
              </div>

              <div className='flex flex-col  items-center justify-center react-gradient'>
                <SiAwsorganizations
                  size={28}
                  title='React.js'
                  className='transition text-red-500'
                />
                <span className='text-[10px] text-dark-400 '>RedShift</span>
              </div>
              <div className='flex flex-col  items-center justify-center react-gradient'>
                <SiFirebase size={28} title='Firebase' className='transition' />
                <span className='text-[10px] text-dark-400 '>Firebase</span>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <IconBrandAws size={28} title='S3' className='text-[#44892C]' />
                <span className='text-[10px] text-dark-400 '>S3</span>
              </div>

              <div className='flex flex-col items-center justify-center '>
                <SiPrisma size={28} title='Prisma' className=' transition prisma-gradient' />
                <span className='text-[10px] text-dark-400 '>Prisma</span>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <SiMicrosoftsqlserver
                  size={28}
                  title='SqlServer'
                  className='transition sqlserver-gradient'
                />
                <span className='text-[10px] text-dark-400'>SQL-Server</span>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <SiMysql size={28} title='MySQL' className='mysql-gradient' />
                <span className='text-[10px] text-dark-400'>MySQL</span>
              </div>
              <div className='flex flex-col items-center justify-center postgresql-gradient'>
                <SiPostgresql size={28} title='PostgreSQL' className=' text-[#336791]' />
                <span className='text-[10px] text-dark-400'>PostgreSQL</span>
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
            'mb-6 self-start md:col-span-full md:col-start-7 md:mb-0  relative rounded-full opacity-80 ',
            {
              'bg-dark-200': theme === 'light',
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
            height={160}
            width={160}
            quality={85}
            src='/assets/LarryProfileNoBackground.png'
            alt='Portrait of Larry Ly'
            loading='lazy'
            className='object-cover rounded-full '
          />
        </motion.figure>
      </motion.section>
    </SectionShell>
  )
}
