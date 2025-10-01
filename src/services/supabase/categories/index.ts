import { apiPostgres } from '@/instances/api'

import type {
  CreateCategoryPayload,
  DeleteCategoryPayload,
  GetAllCategoriesPayload,
  GetCategoryBySlugPayload,
  UpdateCategoryPayload
} from './types'

export class Categories {
  getAllCategories = async ({
    pagination,
    ...payload
  }: GetAllCategoriesPayload) => {
    const filteredPayload = Object.fromEntries(
      Object.entries(payload).filter(([_, value]) => value !== undefined)
    )

    try {
      return await apiPostgres.get('/categories', {
        params: {
          ...pagination,
          ...filteredPayload
        }
      })
    } catch (error) {
      console.error({
        getAllCategoriesErrorMessage: error.message
      })
    }
  }

  getCategoryBySlug = async ({ slug }: GetCategoryBySlugPayload) => {
    try {
      return await apiPostgres.get(`/categories/slug/${slug}`)
    } catch (error) {
      console.error({
        getCategoryBySlugErrorMessage: error.message
      })
    }
  }

  createCategory = async ({ payload, token }: CreateCategoryPayload) => {
    try {
      return await apiPostgres.post('/categories', payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      console.error({
        createCategoryErrorMessage: error.message
      })
    }
  }

  deleteCategory = async ({ id, token }: DeleteCategoryPayload) => {
    try {
      return await apiPostgres.post(
        `/categories/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    } catch (error) {
      console.error({
        deleteCategoryErrorMessage: error.message
      })
    }
  }

  updateCategory = async ({ id, token, payload }: UpdateCategoryPayload) => {
    try {
      return await apiPostgres.patch(`/categories/${id}`, payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      console.error({
        updateCategoryErrorMessage: error.message
      })
    }
  }
}
