import type { Article } from '@/types/models/article'

export const SUB_FEATURED_CARDS_MOCK: Article[] = [
  {
    id: '1',
    slug: 'novo-campus-capivari',
    title: 'IFSP inaugura novo campus em Capivari',
    updatedAt: new Date('2025-09-18T10:30:00Z'),
    description:
      'Solenidade marca a abertura do mais novo campus do IFSP no interior paulista.',
    createdAt: new Date('2025-09-18T10:30:00Z'),
    content:
      'O Instituto Federal de São Paulo inaugurou oficialmente o campus Capivari, oferecendo cursos técnicos e superiores em diversas áreas. A cerimônia contou com autoridades locais, comunidade acadêmica e estudantes que agora terão acesso a uma infraestrutura moderna e voltada para a educação de qualidade.',
    thumb:
      'https://64.media.tumblr.com/f7628ef6aa010e8e8a6b66a9ba0e78fa/1802fd14c1204ce6-d0/s1280x1920/0d06798031a1b0799b5038b887e9b8fcece875a2.jpg',
    isFeatured: false
  },
  {
    id: '2',
    slug: 'semana-tecnologia-ifsp',
    title: 'Semana de Tecnologia promove inovação no IFSP',
    updatedAt: new Date('2025-09-18T10:30:00Z'),
    description:
      'Evento reúne pesquisadores, professores e alunos em palestras e oficinas.',
    createdAt: new Date('2025-09-18T10:30:00Z'),
    content:
      'A tradicional Semana de Tecnologia do IFSP contou com minicursos, palestras e atividades práticas que abordaram temas como inteligência artificial, energias renováveis e empreendedorismo. O evento busca incentivar a troca de conhecimentos e aproximar os estudantes das inovações do mercado.',
    thumb:
      'https://www3.al.sp.gov.br/repositorio/noticia/N-08-2013/fg128076.jpg',
    isFeatured: false
  },
  {
    id: '3',
    slug: 'esporte-e-inclusao',
    title: 'Quadra poliesportiva do IFSP recebe projeto de inclusão',
    updatedAt: new Date('2025-09-18T10:30:00Z'),
    description:
      'Iniciativa incentiva práticas esportivas para alunos e comunidade.',
    createdAt: new Date('2025-09-18T10:30:00Z'),
    content:
      'O campus Capivari do IFSP inaugurou oficialmente sua quadra poliesportiva com um projeto voltado para a inclusão de jovens da comunidade em atividades esportivas. O objetivo é integrar estudantes e moradores locais, fortalecendo laços sociais por meio do esporte.',
    thumb:
      'https://www.ifsp.edu.br/images/2022/02_Fevereiro/capivari-quadra2_20220225.jpeg',
    isFeatured: false
  },
  {
    id: '4',
    slug: 'parceria-industria-local',
    title: 'IFSP firma parceria com indústria local para estágio',
    updatedAt: new Date('2025-09-18T10:30:00Z'),
    description:
      'Alunos terão mais oportunidades de estágio em empresas da região.',
    createdAt: new Date('2025-09-18T10:30:00Z'),
    content:
      'O IFSP assinou acordo com empresas da região para ampliar o programa de estágios e projetos de pesquisa aplicada. A parceria visa aproximar os estudantes do mercado de trabalho, garantindo experiências práticas e contribuindo para o desenvolvimento local.',
    thumb: 'https://srt.ifsp.edu.br/images/Noticias/1308/Drivetech1.JPG',
    isFeatured: false
  }
] as const
