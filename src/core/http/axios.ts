import axios from 'axios'
import {
  appendNextPage,
  handleBusinessError,
  handleRejection,
  unwrapResponse,
  appendAuthHeader,
} from './interceptors'

const client = axios.create({
  baseURL: import.meta.env.VITE_ENDPOINT,
})

client.interceptors.request.use(appendAuthHeader)

client.interceptors.response.use(handleBusinessError)
client.interceptors.response.use(appendNextPage)
client.interceptors.response.use(unwrapResponse, handleRejection)

export { client }
