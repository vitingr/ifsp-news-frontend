import { TypedTitle } from './TypedTitle'

export const ViewMore: React.FC = async () => {
  return (
    <section className="flex min-h-[340px] w-full items-center justify-center rounded-2xl bg-[url('/pages/homepage/hero-background.png')] p-4">
      <article className="mx-auto flex w-full max-w-2xl flex-col items-center gap-6 rounded-2xl bg-white px-8 py-12">
        <TypedTitle />
        <button className="w-fit cursor-pointer rounded-full bg-neutral-800 px-5 py-2.5 !text-neutral-50 transition-all duration-300 hover:brightness-110">
          Conferir todos artigos
        </button>
      </article>
    </section>
  )
}
