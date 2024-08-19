'use client'

import { AnimatePresence, motion } from 'framer-motion'

import { AnimatedLetters, AnimatedText } from '@/components/animated-text'
import { HeroIllustration } from '@/components/hero-illustration'
import { MotionLinkButton } from '@/components/link-button'
import { StarsBackground } from '@/components/ui/stars-background'

export const Hero = () => {
  return (
    <section id='intro' className='md:bg-auto overflow-hidden h-[80vh] pt-24 smooth relative z-0'>
      <motion.section
        variants={{
          hidden: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } },
          visible: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } },
        }}
        initial='hidden'
        whileInView='visible'
        exit='hidden'
        viewport={{ once: true }}
        className='relative text-center md:text-left smooth md:flex md:flex-row justify-center z-10'
      >
        <div className='flex flex-col w-full justify-center'>
          <AnimatePresence>
            <article className=''>
              <AnimatedLetters
                as='h1'
                text='Larry Ly'
                className='font-bold w-full text-5xl lg:text-7xl tracking-wide text-center md:text-left dark:text-[#f7f7f7] text-[#352D39]'
                textVariants={{
                  hidden: { transition: { staggerChildren: 0.015 } },
                  visible: { transition: { staggerChildren: 0.015 } },
                }}
                letterVariants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.5 },
                  },
                }}
              />
              <AnimatedText
                as='p'
                className='mt-1 text-lg font-medium leading-relaxed text-dark-400 dark:text-dark-300 text-center md:text-left w-full'
                text='Developer & Data Analyst'
              />
            </article>

            <MotionLinkButton
              href='#applications'
              motionProps={{
                variants: {
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { ease: 'circOut', duration: 0.5 },
                  },
                },
              }}
              className='mt-8 inline-block md:mt-16 mx-auto md:mx-0'
            >
              Explore my recent projects
            </MotionLinkButton>
          </AnimatePresence>
        </div>

        <HeroIllustration />
      </motion.section>
      <StarsBackground />
    </section>
  )
}
