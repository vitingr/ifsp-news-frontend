import axios from 'axios'

import { apiBaseUrl } from '@/constants/environments/apiBaseUrl'

export const apiPostgres = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})
