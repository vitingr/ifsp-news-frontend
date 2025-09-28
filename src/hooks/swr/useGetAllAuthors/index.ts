import axios from 'axios'
import useSWR from 'swr'

import type { User } from '@/types/models/user'

const fetcher = async () => {
  const { data } = await axios.get(`/api/authors`)

  return data
}

export const useGetAllAuthors = () => {
  const { data = [], ...rest } = useSWR('useGetAllAuthors', fetcher)

  return {
    authors: data as User[],
    ...rest
  }
}
