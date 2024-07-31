import { useMounted } from '@hooks/use-mounted'
import { useTheme } from '@hooks/use-theme'
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
    <section className='z-[-10] absolute scale-[0.6] top-28 right-[50%] translate-x-[50%] md:translate-x-0 md:scale-[0.8] md:top-10 md:-right-40 lg:-right-36 lg:-top-10 xl:-top-10 xl:-right-20 2xl:-right-16 smooth '>
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
          width={800}
          height={706}
          alt='Hero illustration'
          className='object-cover w-full min-w-[693px] h-full min-h-[706px]'
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
            duration: 0.75,
            ease: [0.455, 0.03, 0.515, 0.955],
            delay: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'reverse',
            repeatDelay: 8,
          }}
          priority
          src={image.profileWidget.png}
          height={200}
          width={200}
          alt='Hero notification widget'
          className='absolute left-[2%] -top-20  shadow-xl shadow-green-400/20'
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
          height={350}
          width={350}
          alt='Hero big widget'
          className='absolute -left-[5rem] top-[28rem] shadow-lg shadow-yellow-300'
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
            duration: 0.75,
            ease: [0.455, 0.03, 0.515, 0.955],
            delay: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'reverse',
            repeatDelay: 8,
          }}
          src={image.iyamWidget.png}
          loading='lazy'
          height={350}
          width={350}
          alt='Hero big widget'
          className='absolute right-[0rem] top-[8.25rem] shadow-lg shadow-cyan-500'
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
            duration: 0.75,
            ease: [0.455, 0.03, 0.515, 0.955],
            delay: 14,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'reverse',
            repeatDelay: 8,
          }}
          src={image.hippoWidget.png}
          loading='lazy'
          height={300}
          width={300}
          alt='Hero like widget'
          className='absolute right-[0rem] top-[28rem] shadow-lg shadow-purple-400'
        />
      </picture>
    </section>
  )
}
