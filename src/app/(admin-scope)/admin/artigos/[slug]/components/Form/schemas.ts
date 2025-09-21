import z from 'zod'

export const editArticleSchema = z.object({
  title: z.string().nonempty('Esse campo é obrigatório'),
  description: z.string().nonempty('Esse campo é obrigatório'),
  slug: z.string().nonempty('Esse campo é obrigatório'),
  thumb: z.string().nullable().optional(),
  categories: z.string().optional().nullable()
})

export type EditArticleInputs = z.infer<typeof editArticleSchema>
