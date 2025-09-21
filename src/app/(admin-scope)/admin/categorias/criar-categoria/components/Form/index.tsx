'use client'

import axios from 'axios'
import { redirect } from 'next/navigation'
import type { FC } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { InputField } from '@/components/toolkit/Fields/InputField'
import { Spin } from '@/components/toolkit/Spin'
import { useUserSession } from '@/hooks/useUserSession'
import { zodResolver } from '@hookform/resolvers/zod'

import type { CreateCategoryInputs } from './schemas'
import { createCategorySchema } from './schemas'

export const CreateCategoryForm: FC = () => {
  const user = useUserSession()

  const formMethods = useForm<CreateCategoryInputs>({
    resolver: zodResolver(createCategorySchema)
  })

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting }
  } = formMethods

  const onSubmit: SubmitHandler<CreateCategoryInputs> = async ({
    description,
    slug,
    title
  }) => {
    try {
      const { status } = await axios.post('/api/categories/create-category', {
        payload: {
          description,
          slug,
          title
        },
        token: user?.token
      })

      if (status !== 201) {
        toast('Houve um erro ao publicar uma nova categoria.')
        return
      }

      reset()
      toast('A categoria foi criada com sucesso!')
      redirect('/admin/categorias')
    } catch (onSubmitErr) {
      console.error(onSubmitErr)
    } finally {
      reset()
    }
  }

  return (
    <section className="mx-auto w-full max-w-2xl lg:max-w-7xl">
      <form
        className="flex w-full max-w-2xl flex-col gap-3"
        id="create-category-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputField
          id="title"
          label="Nome da categoria"
          maxLength={120}
          minLength={4}
          placeholder="Digite aqui o nome da categoria"
          spellCheck={false}
          {...register('title')}
          variant="secondary"
        />
        <InputField
          id="slug"
          label="Slug"
          maxLength={120}
          minLength={4}
          placeholder="Esse valor é um identificador único para cada categoria"
          spellCheck={false}
          {...register('slug')}
          variant="secondary"
        />
        <InputField
          id="description"
          label="Descrição da Categoria"
          maxLength={120}
          minLength={4}
          placeholder="Digite aqui a descrição da categoria"
          spellCheck={false}
          {...register('description')}
          variant="secondary"
        />
        <button
          className="mt-4 w-full cursor-pointer rounded-md bg-neutral-700 px-4 py-2.5 text-center text-white hover:brightness-105 disabled:bg-neutral-500"
          disabled={isSubmitting}
          type="submit"
        >
          <p className="text-center text-sm !text-white">
            Criar nova categoria
          </p>
          {isSubmitting ? <Spin /> : null}
        </button>
      </form>
    </section>
  )
}
