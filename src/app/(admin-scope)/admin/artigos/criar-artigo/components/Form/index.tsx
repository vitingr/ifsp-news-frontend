'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { type FC, useState } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Check } from '@/assets/common/Check'
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

  const router = useRouter()

  const [content, setContent] = useState<string>('')
  const [isFeatured, setIsFeatured] = useState<boolean>(false)

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
          isFeatured,
          categories: [categories]
        },
        token: user?.token
      })

      if (status !== 201) {
        toast('Houve um erro ao publicar um novo artigo.')
        return
      }

      reset()
      toast('O artigo foi publicado com sucesso!')
      router.push('/admin/artigos')
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
      className="mx-auto flex w-full max-w-2xl flex-col gap-12 lg:max-w-7xl"
      id="create-article-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex w-full items-center gap-4 lg:justify-between">
        <h2 className="mt-4 w-full text-2xl !font-semibold">
          Criar Novo Artigo
        </h2>
        <div className="flex w-full items-center justify-end">
          <button
            className="flex cursor-pointer items-center gap-3 rounded-sm bg-neutral-700 px-6 py-2 text-center text-sm !text-white transition-all duration-300 hover:bg-neutral-600"
            disabled={isSubmitting}
            type="submit"
          >
            <p className="text-center text-sm !text-white">Publicar Artigo</p>
            {isSubmitting ? <Spin className="!text-white" /> : null}
          </button>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse gap-4 lg:gap-6 xl:flex-row xl:gap-12">
        <div className="w-full">
          <TextEditor onChange={setContent} value={content} />
        </div>
        <div className="flex w-full flex-col gap-3 rounded-sm xl:max-w-md xl:border xl:border-neutral-200 xl:bg-neutral-50 xl:px-4 xl:py-6">
          <h2 className="hidden text-xl !font-semibold xl:block">
            Informações sobre o Artigo
          </h2>
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
          <div className="flex w-full flex-row gap-4">
            <SelectField
              id="categories"
              label="Categorias do Artigo"
              name="categories"
              options={formattedAvailableCategories}
              variant="secondary"
              {...register('categories')}
            />
          </div>
          <div className="ml-1 flex w-full items-center gap-2">
            <button
              className={`h-5 w-5 cursor-pointer rounded-[3px] border transition-all duration-300 ${isFeatured ? 'border-blue-600 bg-blue-600' : 'border-neutral-300 bg-white'}`}
              onClick={() => setIsFeatured(!isFeatured)}
              type="button"
            >
              <Check
                className={`h-3 w-3 !text-white ${isFeatured ? 'opacity-100' : 'opacity-0'}`}
              />
            </button>
            <p className="text-sm">Destacar artigo</p>
          </div>
        </div>
      </div>
    </form>
  )
}
