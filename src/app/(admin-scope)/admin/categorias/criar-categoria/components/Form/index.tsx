'use client'

import axios from 'axios'
import type { FC } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import type { CreateCategoryInputs } from './schemas'
import { createCategorySchema } from './schemas'

export const CreateCategoryForm: FC = () => {
  const formMethods = useForm<CreateCategoryInputs>({
    resolver: zodResolver(createCategorySchema)
  })

  const { handleSubmit, reset } = formMethods

  const onSubmit: SubmitHandler<CreateCategoryInputs> = async ({
    description,
    title
  }) => {
    try {
      const { status } = await axios.post('/api/create-category', {
        payload: {
          description,
          title
        }
      })

      if (status !== 201) {
        console.log('deu errado')
        return
      }

      reset()
      console.log('deu certo')
    } catch (onSubmitErr) {
      console.error(onSubmitErr)
    }
  }

  return (
    <form id="create-category-form" onSubmit={handleSubmit(onSubmit)}></form>
  )
}
