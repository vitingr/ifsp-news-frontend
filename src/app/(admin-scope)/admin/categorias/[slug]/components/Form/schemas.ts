import { z } from 'zod'

export const createCategorySchema = z.object({
  title: z.string().nonempty('Esse campo é obrigatório'),
  description: z.string().nonempty('Esse campo é obrigatório'),
  slug: z.string().nonempty('Esse campo é obrigatório')
})

export type CreateCategoryInputs = z.infer<typeof createCategorySchema>
