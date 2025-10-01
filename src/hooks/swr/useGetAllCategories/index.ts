import axios from 'axios'
import useSWR from 'swr'

import type { Category } from '@/types/models/category'

const fetcher = async () => {
  const { data } = await axios.get(`/api/categories/get-all-categories`)

  return data
}

export const useGetAllCategories = () => {
  const { data = [], ...rest } = useSWR('useGetAllCategories', fetcher)

  return {
    categories: data as Category[],
    ...rest
  }
}
