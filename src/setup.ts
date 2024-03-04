import { axiosInstance } from './core/http'
import useTokenStore from './features/auth/useTokenStore'

export default async function setup() {
  await installMockService()
  await configHttpClient()
}

async function installMockService() {
  if (import.meta.env.VITE_MOCK_ENABLE === 'true') {
    return import('../mock/browser').then(({ createWorker }) => createWorker()).then((worker) => worker.start())
  }
}

async function configHttpClient() {
  axiosInstance.interceptors.request.use((config) => {
    const { token } = useTokenStore()
    if (token) {
      config.headers.setAuthorization(`Bearer ${token}`)
    }
    return config
  })
}
