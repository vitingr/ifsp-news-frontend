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

import { Tag } from '../../../components/icons/Tag'
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
    <form
      className="mx-auto flex w-full max-w-2xl flex-col gap-6 lg:max-w-7xl"
      id="create-category-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mt-4 flex w-full items-center gap-4 border-b border-neutral-200 pb-6 lg:justify-between">
        <article className="flex flex-col gap-2">
          <h2 className="mt-2 flex w-full items-center gap-3 text-2xl !font-semibold">
            <Tag />
            Criar categoria
          </h2>
          <p className="text-sm !text-neutral-500">
            As categorias tem o propósito de facilitar a filtragem e para que os
            usuários encontrem o que desejam mais rapidamente
          </p>
        </article>
        <div className="flex w-full flex-1 items-center justify-end">
          <button
            className="flex cursor-pointer items-center gap-3 rounded-sm bg-neutral-700 px-6 py-2 text-center text-sm !text-white transition-all duration-300 hover:bg-neutral-600"
            disabled={isSubmitting}
            type="submit"
          >
            <p className="text-center text-sm !text-white">
              Publicar Categoria
            </p>
            {isSubmitting ? <Spin className="!text-white" /> : null}
          </button>
        </div>
      </div>
      <div className="flex w-full max-w-2xl flex-col gap-3 lg:max-w-7xl">
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
      </div>
    </form>
  )
}
