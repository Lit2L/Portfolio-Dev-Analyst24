import { useTheme } from '@hooks/use-theme'

import Image from 'next/image'

function Logo() {
  const { theme } = useTheme()
  console.log('theme', theme)
  return (
    <>
      <Image
        src={theme === 'dark' ? '/LarryLogoGrey.png' : '/LarryLogoPurple.png'}
        alt='Larry Logo'
        width={80}
        height={80}
      />
    </>
  )
}

export default Logo
