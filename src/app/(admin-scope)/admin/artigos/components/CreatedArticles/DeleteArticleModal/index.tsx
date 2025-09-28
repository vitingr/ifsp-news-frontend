'use client'

import axios from 'axios'
import type { FC } from 'react'
import { useState } from 'react'
import { toast } from 'sonner'

import { Modal } from '@/components/toolkit/Modal'
import { useEventListener } from '@/hooks/useEventListener'
import { useUserSession } from '@/hooks/useUserSession'

export const DeleteArticleModal: FC = () => {
  const user = useUserSession()

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [articleId, setArticleId] = useState<string | null>(null)

  useEventListener('delete-article', ({ action, data: { id } }) => {
    switch (action) {
      case 'open': {
        setIsOpen(true)
        setArticleId(id)
        break
      }
      case 'close': {
        setIsOpen(false)
        setArticleId(null)
        break
      }
    }
  })

  const handleDeleteArticle = async () => {
    try {
      const { status } = await axios.post('/api/articles/delete-article', {
        articleId,
        token: user?.token
      })

      if (status !== 204) {
        toast('Houve um erro ao deletar esse artigo.')
        return
      }

      setIsOpen(false)
      toast('O artigo foi excluido com sucesso!')
    } catch (deleteArticleErr) {
      console.log(deleteArticleErr)
    }
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="w-full max-w-md rounded-sm bg-white px-8 py-12">
        <div className="flex flex-col gap-8">
          <article className="flex w-full flex-col">
            <h2 className="text-2xl !font-bold">
              Deseja realmente excluir esse artigo?
            </h2>
            <p className="text-sm !text-neutral-500">
              Ao confirmar a exclusão um artigo ela será removida! Essa ação é
              irreversível...
            </p>
          </article>
          <div className="flex w-full items-center gap-6">
            <button
              className="action-admin-button"
              onClick={() => handleDeleteArticle()}
            >
              Confirmar
            </button>
            <button
              className="action-admin-button"
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
