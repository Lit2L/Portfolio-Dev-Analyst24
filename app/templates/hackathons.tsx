import { HackathonCard } from '@/components/hackathon-card'
import BlurFade from '@/components/magicui/blur-fade'
import { SectionHeader } from '@/components/section-header'
import { SectionShell } from '@/components/section-shell'
import { DATA } from '@/data/resume'

export const Hackathons = () => {
  const BLUR_FADE_DELAY = 0.04
  return (
    <SectionShell id='hackathons'>
      <SectionHeader heading='Hackathons' />
      <section id='hackathons max-w-3xl'>
        <div className='space-y-12 w-full '>
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-6'>
                <div className='inline-block rounded-lg bg-foreground text-background px-3 py-1 mx-3 text-xs'>
                  Hackathons
                </div>
                <div className='inline-block rounded-lg bg-foreground text-background px-3 py-1 text-xs'>
                  Achievements
                </div>{' '}
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  I like building and watching things grow.
                </h2>
                <p className='text-muted-foreground text-sm px-6'>
                  I&apos;ve been lucky to be part of some incredible projects, that have challenged
                  me and helped me grow. Witnessing what can be accomplished by a team of driven and
                  passionate individuals was one of the most eye-opening experiences of my life.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className='mb-4 ml-4 divide-y divide-dashed border-l'>
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
    </SectionShell>
  )
}
