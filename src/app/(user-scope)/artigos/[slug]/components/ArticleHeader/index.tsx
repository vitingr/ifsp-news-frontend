import Image from 'next/image'
import type { FC } from 'react'

import { Facebook } from '@/assets/brands/Facebook'
import { LinkedIn } from '@/assets/brands/LinkedIn'
import { WhatsApp } from '@/assets/brands/WhatsApp'
import { Breadcrumb } from '@/components/common/Breadcrumb'
import { BASE_URL } from '@/constants/environments/baseUrl'
import { createShareLink } from '@/utils/helpers/createShareLink'

import type { ArticleHeaderProps } from './types'

export const ArticleHeader: FC<ArticleHeaderProps> = ({ article }) => {
  return (
    <section className="px-4 py-12 lg:py-16 xl:px-0">
      <header className="mx-auto flex w-full max-w-2xl flex-col gap-4 lg:max-w-3xl">
        <Breadcrumb items={[{ name: article.title, href: '#' }]} />
        <article className="mt-4 flex w-full flex-col">
          <p className="text-sm !text-neutral-500">ATUALIZAÇÃO</p>
          <p className="text-sm !text-neutral-500">28 de setembro de 2025</p>
        </article>
        <h1 className="text-2xl !font-bold lg:text-4xl 2xl:text-5xl">
          {article.title}
        </h1>
        <p className="text-lg">{article.description}</p>
        <div className="flex items-center gap-3">
          <a
            href={`${createShareLink('facebook')}${encodeURIComponent(`${BASE_URL}/artigos/${article.slug}`)}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Facebook className="h-4 w-4 cursor-pointer transition-all duration-300 hover:text-emerald-600" />
          </a>
          <a
            href={`${createShareLink('whatsapp')}${encodeURIComponent(`${BASE_URL}/artigos/${article.slug}`)}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <WhatsApp className="h-5 w-5 cursor-pointer transition-all duration-300 hover:text-emerald-600" />
          </a>
          <a
            href={`${createShareLink('linkedin')}${encodeURIComponent(`${BASE_URL}/artigos/${article.slug}`)}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedIn className="h-6 w-6 cursor-pointer transition-all duration-300 hover:text-emerald-600" />
          </a>
        </div>
        <figure className="group mt-4 w-full overflow-hidden rounded-sm">
          <Image
            alt={article.title}
            className="max-h-[500px] w-full rounded-sm object-cover transition-all duration-300 group-hover:scale-[1.01]"
            height={1080}
            src={article.thumb}
            width={1920}
          />
        </figure>
      </header>
    </section>
  )
}
