import axios, { AxiosResponse } from 'axios'
import { API_URL } from 'settings'
import { QueryClient } from 'react-query'
import { PickPoint } from 'types/entities'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})

export const getAddresses = () => {
  return apiClient.get<undefined, AxiosResponse<{ pickPoints: PickPoint[] }>>('vacancy/geo-state')
}
