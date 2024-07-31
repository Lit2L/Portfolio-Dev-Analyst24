'use client'

import { AnimatePresence, motion } from 'framer-motion'

import { AnimatedLetters, AnimatedText } from '@components/animated-text'
import { HeroIllustration } from '@components/hero-illustration'
import { MotionLinkButton } from '@components/link-button'

export const Hero = () => {
  return (
    <header
      id='intro'
      className='shadow-[inset_0_-40px_15px_-10px_#ededed] dark:shadow-[inset_0_-40px_15px_-10px_#171717] md:bg-auto overflow-hidden h-[90vh] pt-24 smooth  relative z-0'
    >
      <motion.section
        variants={{
          hidden: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } },
          visible: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } },
        }}
        initial='hidden'
        whileInView='visible'
        exit='hidden'
        viewport={{ once: true }}
        className='container relative text-center md:text-left smooth flex flex-col justify-center z-10'
      >
        <div className='flex flex-col justify-center smooth sm:justify-start md:translate-y-40'>
          <AnimatePresence>
            <article className='lg:max-w-[60%]'>
              <AnimatedLetters
                as='h1'
                text='Larry Ly'
                className='text-5xl font-bold md:text-6xl lg:text-8xl tracking-wide text-center md:text-left dark:text-[#f7f7f7] text-[#352D39]'
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
                className='mt-1 text-lg font-medium leading-relaxed text-dark-400 dark:text-dark-300 text-center md:text-left smooth'
                text='Developer & Data Analyst'
              />
            </article>

            <MotionLinkButton
              href='#projects'
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
              Explore my projects
            </MotionLinkButton>
          </AnimatePresence>
        </div>
        <HeroIllustration />
      </motion.section>
    </header>
  )
}
