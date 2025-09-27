import z from 'zod'

export const inviteAuthorSchema = z.object({
  email: z.string(),
  role: z.string()
})

export type InviteAuthorInputs = z.infer<typeof inviteAuthorSchema>
