import { cn } from '@/lib/utils'
import Image from 'next/image'
import { HTMLAttributes } from 'react'

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  // imgSrc: string
  dark?: boolean
}

const Logo = ({ className, dark = false, ...props }: LogoProps) => {
  return (
    <div className={cn('relative z-50', className)} {...props}>
      <Image
        src={dark ? '/LarryLogoPurple.png' : '/LarryLogoGrey.png'}
        className='z-50'
        alt='logo'
        width={150}
        height={150}
      />

      {/* <div className='absolute -z-10 inset-0'>
        <Image
          className='object-cover min-w-full min-h-full'
          src={imgSrc}
          alt='overlaying phone image'
          layout='fill'
        />
      </div> */}
    </div>
  )
}

export default Logo
