'use client'

import axios from 'axios'
import type { FC } from 'react'
import { useState } from 'react'
import { toast } from 'sonner'

import { Modal } from '@/components/toolkit/Modal'
import { useGetAllCategories } from '@/hooks/swr/useGetAllCategories'
import { useEventListener } from '@/hooks/useEventListener'
import { useUserSession } from '@/hooks/useUserSession'

export const DeleteCategoryModal: FC = () => {
  const user = useUserSession()

  const { mutate } = useGetAllCategories()

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [categoryId, setCategoryId] = useState<string | null>(null)

  useEventListener('delete-category', ({ action, data: { id } }) => {
    switch (action) {
      case 'open': {
        setIsOpen(true)
        setCategoryId(id)
        break
      }
      case 'close': {
        setIsOpen(false)
        setCategoryId(null)
        break
      }
    }
  })

  const handleDeleteCategory = async () => {
    try {
      const { status } = await axios.delete(
        `/api/categories/delete-category?categoryId=${categoryId}&token=${user?.token}`
      )

      if (status !== 200) {
        toast.error('Houve um erro ao deletar essa categoria.')
        return
      }

      setIsOpen(false)
      toast.success('A categoria foi excluida com sucesso!')
      await mutate()
    } catch (deleteCategoryErr) {
      console.log(deleteCategoryErr)
    }
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="w-full max-w-md rounded-sm bg-white px-8 py-12">
        <div className="flex flex-col gap-8">
          <article className="flex w-full flex-col">
            <h2 className="text-2xl !font-bold">
              Deseja realmente excluir essa categoria?
            </h2>
            <p className="text-sm !text-neutral-500">
              Ao confirmar a exclusão uma categoria ela será removida! Essa ação
              é irreversível...
            </p>
          </article>
          <div className="flex w-full items-center justify-center gap-6">
            <button
              className="action-admin-button w-full"
              onClick={() => handleDeleteCategory()}
            >
              Confirmar
            </button>
            <button
              className="action-admin-button w-full"
              onClick={() => setIsOpen(false)}
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}
