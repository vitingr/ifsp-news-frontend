'use client'

import axios from 'axios'
import { type FC, useState } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

import { InputField } from '@/components/toolkit/Fields/InputField'
import { SelectField } from '@/components/toolkit/Fields/SelectField'
import { Spin } from '@/components/toolkit/Spin'
import { useUserSession } from '@/hooks/useUserSession'
import { zodResolver } from '@hookform/resolvers/zod'

import type { CreateArticleInputs } from './schemas'
import { createArticleSchema } from './schemas'
import { TextEditor } from './TextEditor'
import type { CreateArticleFormProps } from './types'

export const CreateArticleForm: FC<CreateArticleFormProps> = ({
  availableCategories
}) => {
  const user = useUserSession()

  const [content, setContent] = useState<string>('')

  const formMethods = useForm<CreateArticleInputs>({
    resolver: zodResolver(createArticleSchema)
  })

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting }
  } = formMethods

  const onSubmit: SubmitHandler<CreateArticleInputs> = async ({
    description,
    slug,
    thumb = 'https://images.ctfassets.net/kftzwdyauwt9/35hDFegmXaio5QTQcX908E/326ac0d57b3e0be6d9e5643e321fbe28/oai_GA_Stories_1.1.png?w=1920&q=90&fm=webp',
    title,
    categories
  }) => {
    try {
      const { status } = await axios.post('/api/articles/create-article', {
        payload: {
          description,
          title,
          slug,
          thumb,
          content,
          categories: [categories]
        },
        token: user?.token
      })

      if (status !== 201) {
        console.log('deu errado')
        return
      }

      reset()
      console.log('deu certo')
    } catch (createArticleErr) {
      console.error(createArticleErr)
    }
  }

  const formattedAvailableCategories = availableCategories.map(category => ({
    label: category.title,
    value: category.id
  }))

  return (
    <form
      className="mx-auto flex w-full max-w-7xl flex-col-reverse gap-8 lg:flex-row lg:gap-12"
      id="create-article-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full">
        <TextEditor onChange={setContent} value={content} />
      </div>
      <div className="flex w-full flex-col gap-3">
        <InputField
          id="title"
          label="Nome do artigo"
          maxLength={120}
          minLength={4}
          placeholder="Digite aqui o nome do artigo"
          spellCheck={false}
          {...register('title')}
          variant="secondary"
        />
        <InputField
          id="slug"
          label="Slug"
          maxLength={120}
          minLength={4}
          placeholder="Esse valor é um identificador único para cada artigo"
          spellCheck={false}
          {...register('slug')}
          variant="secondary"
        />
        <InputField
          id="des"
          label="Descrição do artigo"
          maxLength={120}
          minLength={4}
          placeholder="Digite aqui a descrição do artigo"
          spellCheck={false}
          {...register('description')}
          variant="secondary"
        />
        <div className="w-full">
          <SelectField
            id="categories"
            label="Categorias do Artigo"
            name="categories"
            options={formattedAvailableCategories}
            variant="secondary"
            {...register('categories')}
          />
        </div>
        <button
          className="mt-4 w-full cursor-pointer rounded-md bg-neutral-700 px-4 py-3 text-center text-white hover:brightness-105 disabled:bg-neutral-500"
          disabled={isSubmitting}
          type="submit"
        >
          <p className="text-center text-base !text-white">
            Criar nova categoria
          </p>
          {isSubmitting ? <Spin /> : null}
        </button>
      </div>
    </form>
  )
}
