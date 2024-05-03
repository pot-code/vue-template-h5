import useTokenStore from './features/auth/useTokenStore'
import { OpenAPI } from './gen/api'

async function installMockService() {
  if (import.meta.env.VITE_MOCK_ENABLE === 'true') {
    return import('../mock/browser')
      .then(({ createWorker }) => createWorker())
      .then((worker) =>
        worker.start({
          onUnhandledRequest: 'bypass',
        }),
      )
  }
}

async function configOpenApi() {
  OpenAPI.BASE = import.meta.env.VITE_API_PREFIX
  OpenAPI.interceptors.request.use((config) => {
    const { token } = useTokenStore()
    if (!token) return config

    if (!config.headers) config.headers = {}
    config.headers.Authorization = `Bearer ${token}`
    return config
  })
}

export default async function setup() {
  await installMockService()

  configOpenApi()
}
