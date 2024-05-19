import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const URL = process.env.NEXT_PUBLIC_URL || 'https://larryly-portfolio.vercel.app/'

  return {
    rules: {
      userAgent: ['Googlebot', '*'],
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${URL}/sitemap.xml`,
  }
}
