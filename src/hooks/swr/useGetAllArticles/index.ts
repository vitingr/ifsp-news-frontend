import axios from 'axios'
import useSWR from 'swr'

import type { Article } from '@/types/models/article'

const fetcher = async () => {
  const { data } = await axios.get(`/api/articles/get-all-articles`)

  return data
}

export const useGetAllArticles = () => {
  const { data = [], ...rest } = useSWR('useGetAllArticles', fetcher)

  return {
    articles: data as Article[],
    ...rest
  }
}
