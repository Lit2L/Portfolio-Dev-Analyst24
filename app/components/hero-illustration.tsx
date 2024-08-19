import { useMounted } from '@/hooks/use-mounted'
import { useTheme } from '@/hooks/use-theme'
import type { Variants } from 'framer-motion'
import { motion } from 'framer-motion'

import Image from 'next/image'

const MotionImage = motion(Image)

const bigWidgetVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

const smallWidgetVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
}

const imageMap = {
  dark: {
    base: { webp: '/assets/hero-base-dark.webp', png: '/assets/hero-base-dark.png' },
    resume: {
      webp: '/assets/hero-resume-widget.webp',
      png: '/assets/hero-resume-widget.png',
    },
    hippoWidget: {
      webp: '/assets/hero-hippo-widget.webp',
      png: '/assets/hero-hippo-widget.png',
    },
    nerdsWidget: {
      webp: '/assets/hero-nerds-widget.webp',
      png: '/assets/hero-nerds-widget.png',
    },
    profileWidget: {
      webp: '/assets/hero-profile-widget-dark.webp',
      png: '/assets/hero-profile-widget-dark.png',
    },
    louvairWidget: {
      webp: '/assets/hero-louvair-widget.webp',
      png: '/assets/hero-louvair-widget.png',
    },
    iyamWidget: {
      webp: '/assets/hero-iyam-widget.webp',
      png: '/assets/hero-iyam-widget.png',
    },
  },
  light: {
    base: { webp: '/assets/hero-base-light.webp', png: '/assets/hero-base-light.png' },
    resume: {
      webp: '/assets/hero-resume-widget.webp',
      png: '/assets/hero-resume-widget.png',
    },
    hippoWidget: {
      webp: '/assets/hero-hippo-widget.webp',
      png: '/assets/hero-hippo-widget.png',
    },
    nerdsWidget: {
      webp: '/assets/hero-nerds-widget.webp',
      png: '/assets/hero-nerds-widget.png',
    },
    profileWidget: {
      webp: '/assets/hero-profile-widget-light.webp',
      png: '/assets/hero-profile-widget-light.png',
    },
    louvairWidget: {
      webp: '/assets/hero-louvair-widget.webp',
      png: '/assets/hero-louvair-widget.png',
    },
    iyamWidget: {
      webp: '/assets/hero-iyam-widget.webp',
      png: '/assets/hero-iyam-widget.png',
    },
  },
}

export const HeroIllustration = () => {
  const { resolvedTheme } = useTheme()
  const mounted = useMounted()
  const activeTheme = resolvedTheme === 'dark' ? 'dark' : 'light'

  const image = imageMap[activeTheme]

  if (!mounted) return null

  return (
    <section className='z-50 w-1/2'>
      <div className='z-[-10] hidden md:flex  scale-[0.6] top-28 right-[50%] md:scale-[0.8] md:top-10 md:-right-40 lg:-right-36 lg:-top-10 xl:-top-0 xl:-right-20 2xl:-right-16 smooth '>
        <picture>
          <source type='image/webp' srcSet={image.base.webp} />
          <source type='image/png' srcSet={image.base.png} />
          <MotionImage
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial='hidden'
            animate='visible'
            exit='hidden'
            transition={{
              duration: 0.75,
              ease: [0.455, 0.03, 0.515, 0.955],
              delay: 0.5,
            }}
            priority
            src={image.base.png}
            width={400}
            height={406}
            alt='Hero illustration'
            className='object-cover w-full min-w-[500px] h-full min-h-[500px] max-w-[500px] max-h-[600px]'
          />
        </picture>
        <picture>
          <source type='image/webp' srcSet={image.profileWidget.webp} />
          <source type='image/png' srcSet={image.profileWidget.png} />
          <MotionImage
            variants={smallWidgetVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            transition={{
              duration: 0.5,
              ease: [0.455, 0.03, 0.515, 0.955],
              delay: 1,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: 'reverse',
              repeatDelay: 8,
            }}
            priority
            src={image.profileWidget.png}
            height={75}
            width={75}
            alt='Hero notification widget'
            className='absolute left-1/3 top-1/4 scale-75 shadow-lg shadow-sky-600/30'
          />
        </picture>
        <picture>
          <source type='image/webp' srcSet={image.louvairWidget.webp} />
          <source type='image/png' srcSet={image.louvairWidget.png} />
          <MotionImage
            variants={bigWidgetVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            transition={{
              duration: 0.75,
              ease: [0.455, 0.03, 0.515, 0.955],
              delay: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: 'reverse',
              repeatDelay: 8,
            }}
            src={image.louvairWidget.png}
            loading='lazy'
            height={100}
            width={100}
            alt='Hero big widget'
            className='absolute left-[35%] bottom-[15%] scale-75 shadow-lg shadow-red-200/30'
          />
        </picture>
        <picture>
          <source type='image/webp' srcSet={image.iyamWidget.webp} />
          <source type='image/png' srcSet={image.iyamWidget.png} />
          <MotionImage
            variants={bigWidgetVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            transition={{
              duration: 0.5,
              ease: [0.455, 0.03, 0.515, 0.955],
              delay: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: 'reverse',
              repeatDelay: 8,
            }}
            src={image.iyamWidget.png}
            loading='lazy'
            height={100}
            width={100}
            alt='Hero big widget'
            className='absolute right-[-5%] top-[10%] shadow-lg shadow-cyan-500/30'
          />
        </picture>
        <picture>
          <source type='image/webp' srcSet={image.hippoWidget.webp} />
          <source type='image/png' srcSet={image.hippoWidget.png} />
          <MotionImage
            variants={smallWidgetVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            transition={{
              duration: 0.5,
              ease: [0.455, 0.03, 0.515, 0.955],
              delay: 14,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: 'reverse',
              repeatDelay: 14,
            }}
            src={image.hippoWidget.png}
            loading='lazy'
            height={100}
            width={100}
            alt='Hero like widget'
            className='absolute right-[-5%] bottom-[15%] shadow-lg shadow-purple-400/30'
          />
        </picture>
        <picture>
          <source type='image/webp' srcSet={image.nerdsWidget.webp} />
          <source type='image/png' srcSet={image.nerdsWidget.png} />
          <MotionImage
            variants={smallWidgetVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            transition={{
              duration: 0.5,
              ease: [0.455, 0.03, 0.515, 0.955],
              delay: 16,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: 'reverse',
              repeatDelay: 8,
            }}
            src={image.nerdsWidget.png}
            loading='lazy'
            height={100}
            width={100}
            alt='Hero like widget'
            className='absolute right-[-5%] top-1/3 shadow-lg shadow-emerald-400/30'
          />
        </picture>
      </div>
    </section>
  )
}
