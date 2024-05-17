import Image from 'next/image'

export const Logo = () => {
  return (
    <div className=''>
      <Image src='/assets/LarryLogo.png' alt='Larry Logo' width={80} height={80} />
    </div>
  )
}
