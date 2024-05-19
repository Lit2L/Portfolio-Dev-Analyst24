export type Project = {
  id: number
  name: string
  area: string
  link: string
  image: string
  imageAlt: string
  color?: string
}

export const projects: Project[] = [
  {
    id: 0,
    name: `L'ouvair App`,
    area: 'E-commerce',
    image:
      'https://cdn.dribbble.com/userupload/14580331/file/original-489722bcffe8bab242fa405d066a1303.png?resize=1024x768',
    imageAlt: 'louvair',
    link: '/project/louvair',
    color: '#F9F9F9',
  },
  {
    id: 1,
    name: 'Admin Hippo',
    area: 'Design and Development',
    image:
      'https://cdn.dribbble.com/userupload/14580218/file/original-c2ffc1b0fe4de77a6cbb42837ee088e8.png?resize=1024x768',
    imageAlt: 'A web streaming service inspired app with a different approach to the design.',
    link: '/project/admin-hippo',
    color: '#1D1D26',
  },
  {
    id: 2,
    name: 'iYam Swim Coach',
    area: 'Payments, Appointments & Scheduling',
    image:
      'https://cdn.dribbble.com/userupload/14580435/file/original-d64910229d568969753a296b260cd631.png?resize=1024x768',
    imageAlt: 'iYam Swim Coach by Larry Ly',
    link: '/project/iyam-swim-coach',
    color: '#E3E3E3',
  },
]
