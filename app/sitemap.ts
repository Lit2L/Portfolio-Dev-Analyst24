import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const URL = process.env.NEXT_PUBLIC_URL || 'https://larryly.vercel.app'

  return [
    {
      url: `${URL}`,
      lastModified: new Date(),
    },
    {
      url: `${URL}/side-projects`,
      lastModified: new Date(),
    },
    {
      url: `${URL}/project/louvair`,
      lastModified: new Date(),
    },
    {
      url: `${URL}/project/hippo`,
      lastModified: new Date(),
    },
    {
      url: `${URL}/project/iyam`,
      lastModified: new Date(),
    },
  ]
}
