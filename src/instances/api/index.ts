import axios from 'axios'

import { apiBaseUrl } from '@/constants/environments/apiBaseUrl'

export const apiPostgres = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    'Content-Type': 'application/json'
  }
})
