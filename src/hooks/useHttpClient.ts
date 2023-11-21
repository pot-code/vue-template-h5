import { HttpClient } from '@/core/http'
import { captureBusinessError, handleRejection } from '@/core/http/interceptors'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_ENDPOINT,
})

axiosInstance.interceptors.response.use(captureBusinessError, handleRejection)

const client = new HttpClient(axiosInstance)

export default function useHttpClient() {
  return { client }
}
