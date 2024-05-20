'use client'

import { useTheme } from '@hooks/use-theme'
import Image from 'next/image'
import LogoGrey from '../../public/LarryLogoGrey.png'
import LogoPurple from '../../public/LarryLogoPurple.png'

export const Logo = () => {
  const { theme } = useTheme()
  console.log('theme', theme)
  return (
    <>
    {theme === 'dark' ? (
      <Image src={LogoGrey} alt='Larry Logo' width={80} height={80} />
    ): (
      <Image src={LogoPurple} alt='Larry Logo' width={80} height={80} />

    )}
    </>
  )
}
