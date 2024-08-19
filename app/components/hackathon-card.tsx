import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

interface Props {
  title: string
  description: string
  dates: string
  location: string
  features?: readonly string[]
  image?: string
  links?: readonly {
    icon: React.ReactNode
    title: string
    href: string
  }[]
}

export function HackathonCard({
  title,
  description,
  dates,
  location,
  features,
  image,
  links,
}: Props) {
  return (
    <div className='relative ml-10 py-12'>
      <div className='absolute -left-16 top-2 flex items-center justify-center bg-slate-400/90 dark:bg-slate-400 rounded-full'>
        <Avatar className='border border-slate-400 dark:border-slate-500 size-12 p-1 m-auto'>
          <AvatarImage src={image} alt={title} className='object-contain' />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className='flex flex-1 flex-col justify-start gap-3'>
        {dates && <time className='text-xs text-muted-foreground'>{dates}</time>}
        <h2 className='font-semibold leading-none'>{title}</h2>
        {location && <p className='text-sm text-muted-foreground'>{location}</p>}
        {description && (
          <span className='prose dark:prose-invert text-sm text-muted-foreground'>
            {description}
          </span>
        )}
        {features && (
          <ul className='flex flex-wrap gap-2'>
            {features.map(feature => (
              <Badge key={feature}>{feature}</Badge>
            ))}
          </ul>
        )}
        {links && (
          <div className='flex gap-2'>
            {links.map(({ icon, title, href }) => (
              <Link key={title} href={href}>
                <span className='flex items-center gap-1'>
                  {icon}
                  <span>{title}</span>
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
