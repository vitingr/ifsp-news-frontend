import { CARDS } from './data'
import { TemplateCard } from './TemplateCard'

export const Templates: React.FC = async () => {
  return (
    <section className="bg-neutral-100 px-4 py-12 lg:py-20">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-12 lg:max-w-7xl lg:gap-8">
        <article className="flex w-full items-end justify-between gap-4">
          <h2 className="w-full flex-1 text-2xl !font-semibold">
            Postagens Oficiais
          </h2>
          <p className="w-auto text-base">Ver mais</p>
        </article>
        <div className="flex w-full flex-col gap-6 lg:flex-row lg:justify-between">
          {CARDS.map((card, index: number) => (
            <TemplateCard copy={card} key={`${card.title}-${index}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
