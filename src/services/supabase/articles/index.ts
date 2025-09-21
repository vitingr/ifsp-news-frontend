import { apiPostgres } from '@/instances/api'

import type {
  CreateArticlePayload,
  DeleteArticlePayload,
  GetAllArticlesPayload,
  GetArticleBySlugPayload,
  UpdateArticlePayload
} from './types'

export class Articles {
  getAllArticles = async ({
    pagination,
    ...payload
  }: GetAllArticlesPayload) => {
    const filteredPayload = Object.fromEntries(
      Object.entries(payload).filter(([_, value]) => value !== undefined)
    )

    try {
      return await apiPostgres.get('/articles', {
        params: {
          ...pagination,
          ...filteredPayload
        }
      })
    } catch (error) {
      console.error({
        getAllArticlesErrorMessage: error.message
      })
    }
  }

  getArticleBySlug = async ({ slug }: GetArticleBySlugPayload) => {
    try {
      return await apiPostgres.get(`/articles/slug/${slug}`)
    } catch (error) {
      console.error({
        getArticleBySlugErrorMessage: error.message
      })
    }
  }

  createArticle = async ({ payload, token }: CreateArticlePayload) => {
    try {
      return await apiPostgres.post('/articles', payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      console.error({
        createArticleErrorMessage: error.message
      })
    }
  }

  deleteArticle = async ({ id, token }: DeleteArticlePayload) => {
    try {
      return await apiPostgres.delete(`/articles/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      console.error({
        deleteArticleErrorMessage: error.message
      })
    }
  }

  updateArticle = async ({ token, payload }: UpdateArticlePayload) => {
    try {
      return await apiPostgres.patch('/articles', payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      console.error({
        createArticleErrorMessage: error.message
      })
    }
  }
}
