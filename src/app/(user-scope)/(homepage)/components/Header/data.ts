import type { Article } from '@/types/models/article'

export const SUB_FEATURED_CARDS_MOCK: Article[] = [
  {
    id: '1',
    slug: 'post-1',
    title: 'Revolutionizing industries through SaaS implementation',
    updatedAt: new Date('2025-09-18T10:30:00Z'),
    description: '',
    createdAt: new Date('2025-09-18T10:30:00Z'),
    content: 'bla bla bla',
    thumb:
      'https://64.media.tumblr.com/f7628ef6aa010e8e8a6b66a9ba0e78fa/1802fd14c1204ce6-d0/s1280x1920/0d06798031a1b0799b5038b887e9b8fcece875a2.jpg',
    isFeatured: false
  },
  {
    id: '2',
    slug: 'post-2',
    title: 'Revolutionizing industries through SaaS implementation',
    updatedAt: new Date('2025-09-18T10:30:00Z'),
    description: '',
    createdAt: new Date('2025-09-18T10:30:00Z'),
    content: 'bla bla bla',
    thumb:
      'https://www3.al.sp.gov.br/repositorio/noticia/N-08-2013/fg128076.jpg',
    isFeatured: false
  },
  {
    id: '3',
    slug: 'post-4',
    title: 'Revolutionizing industries through SaaS implementation',
    updatedAt: new Date('2025-09-18T10:30:00Z'),
    description: '',
    createdAt: new Date('2025-09-18T10:30:00Z'),
    content: 'bla bla bla',
    thumb:
      'https://www.ifsp.edu.br/images/2022/02_Fevereiro/capivari-quadra2_20220225.jpeg',
    isFeatured: false
  },
  {
    id: '4',
    slug: 'post-5',
    title: 'Revolutionizing industries through SaaS implementation',
    updatedAt: new Date('2025-09-18T10:30:00Z'),
    description: '',
    createdAt: new Date('2025-09-18T10:30:00Z'),
    content: 'bla bla bla',
    thumb: 'https://srt.ifsp.edu.br/images/Noticias/1308/Drivetech1.JPG',
    isFeatured: false
  }
] as const
