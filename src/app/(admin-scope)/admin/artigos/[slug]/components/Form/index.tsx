'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { type FC, useState } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { UploadButton } from '@/components/common/UploadButton'
import { InputField } from '@/components/toolkit/Fields/InputField'
import { SelectField } from '@/components/toolkit/Fields/SelectField'
import { Spin } from '@/components/toolkit/Spin'
import { useUserSession } from '@/hooks/useUserSession'
import { uploadImage } from '@/utils/helpers/uploadImage'
import { zodResolver } from '@hookform/resolvers/zod'

import { News } from '../../../components/icons/News'
import { Check } from '../icons/Check'
import { MediaIcon } from '../icons/Media'
import type { EditArticleInputs } from './schemas'
import { editArticleSchema } from './schemas'
import { TextEditor } from './TextEditor'
import type { EditArticleFormProps } from './types'

export const EditArticleForm: FC<EditArticleFormProps> = ({
  availableCategories,
  article
}) => {
  const user = useUserSession()

  const router = useRouter()

  const [content, setContent] = useState<string>(article.content)
  const [isFeatured, setIsFeatured] = useState<boolean>(
    article.isFeatured || false
  )
  const [articleThumb, setArticleThumb] = useState<string>(article.thumb)
  const [isUploadLoading, setIsUploadLoading] = useState<boolean>(false)

  const formMethods = useForm<EditArticleInputs>({
    resolver: zodResolver(editArticleSchema),
    defaultValues: {
      categories: article.articleCategory?.[0]?.categoryId ?? ''
    }
  })

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting }
  } = formMethods

  const onSubmit: SubmitHandler<EditArticleInputs> = async ({
    description,
    slug,
    title,
    categories
  }) => {
    try {
      const { status } = await axios.patch('/api/articles/edit-article', {
        payload: {
          description,
          title,
          slug,
          thumb: articleThumb
            ? articleThumb
            : 'https://images.ctfassets.net/kftzwdyauwt9/35hDFegmXaio5QTQcX908E/326ac0d57b3e0be6d9e5643e321fbe28/oai_GA_Stories_1.1.png?w=1920&q=90&fm=webp',
          content,
          isFeatured,
          categories: [categories]
        },
        token: user?.token,
        articleId: article.id
      })

      if (status !== 200) {
        toast('Erro! Não foi possível alterar as informações do artigo')
        return
      }

      reset()
      toast('O artigo foi atualizado com sucesso!')
      router.push('/admin/artigos')
    } catch (createArticleErr) {
      console.error(createArticleErr)
    }
  }

  const handleUploadImage = async (path: string) => {
    try {
      setIsUploadLoading(true)
      const imagePath = await uploadImage({ imagePath: path })
      setArticleThumb(imagePath.url)
    } catch (uploadImageError) {
      console.log(uploadImageError)
    } finally {
      setIsUploadLoading(false)
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
      <div className="mt-4 flex w-full items-center gap-4 border-b border-neutral-200 pb-8 lg:justify-between">
        <article className="flex flex-col gap-2">
          <h2 className="mt-2 flex w-full items-center gap-3 text-2xl !font-semibold">
            <News />
            Artigos criados
          </h2>
          <p className="text-sm !text-neutral-500">
            Os artigos são postagens que podem ser descobertas e lidas pelos
            usuários
          </p>
        </article>
        <div className="flex w-full flex-1 items-center justify-end">
          <button
            className="action-admin-button !flex !items-center !gap-3"
            disabled={isSubmitting}
            type="submit"
          >
            <p className="text-center text-sm">Editar Artigo</p>
            {isSubmitting ? <Spin className="!text-neutral-500" /> : null}
          </button>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse gap-4 lg:gap-6 xl:flex-row xl:gap-8">
        <div className="w-full">
          <TextEditor onChange={setContent} value={content} />
        </div>
        <div className="flex w-full flex-col gap-3 rounded-sm xl:max-w-md xl:border xl:border-neutral-200 xl:bg-neutral-50 xl:px-4 xl:py-6">
          <h2 className="hidden text-xl !font-semibold xl:block">
            Informações sobre o Artigo
          </h2>
          <div className="mb-4 flex h-full max-h-[258px] flex-col items-center justify-center gap-4 border p-4">
            <MediaIcon />
            <UploadButton
              uploadImageAction={async (path: string) =>
                await handleUploadImage(path)
              }
              isLoading={isUploadLoading}
              setImagePath={setArticleThumb}
            >
              <p className="cursor-pointer">Escolher imagem</p>
            </UploadButton>
          </div>
          <InputField
            defaultValue={article.title}
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
            defaultValue={article.slug}
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
            defaultValue={article.description}
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
              className={`flex h-5 w-5 cursor-pointer items-center justify-center rounded-[3px] border transition-all duration-300 ${isFeatured ? 'border-blue-600 bg-blue-600' : 'border-neutral-300 bg-white'}`}
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
