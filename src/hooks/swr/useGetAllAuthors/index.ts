import axios from 'axios'
import useSWR from 'swr'

const fetcher = async () => {
  const { data } = await axios.get(`/api/authors/get-all-authors`)

  return data
}

export const useGetAllAuthors = () => {
  const { data = [], ...rest } = useSWR(['useGetAllAuthors', fetcher])

  return {
    authors: data,
    ...rest
  }
}
