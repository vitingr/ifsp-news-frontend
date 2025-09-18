import Image from 'next/image'

export const FeaturedArticleCard = async () => {
  return (
    <div className="group relative w-full rounded-md">
      <figure className="absolute h-full w-full overflow-hidden rounded-md">
        <Image
          alt="Featured Article Image"
          className="h-full w-full rounded-md object-cover transition-all duration-300 hover:scale-[1.01]"
          height={1080}
          src="https://cpv.ifsp.edu.br/images/cpvdrone.jpeg"
          width={1920}
        />
      </figure>
      <article className="bg-opacity-10 absolute bottom-0 left-0 flex min-h-[100px] w-full flex-col gap-2 !rounded-b-md bg-[#29292950] bg-clip-padding px-6 py-8 backdrop-blur-md backdrop-filter">
        <span className="max-w-fit rounded-full border border-white px-3 py-1 text-xs !text-white">
          Business
        </span>
        <h2 className="text-3xl !font-semibold !text-white">
          Unlocking Business <br /> Efficiency with SaaS Solutions
        </h2>
      </article>
    </div>
  )
}
