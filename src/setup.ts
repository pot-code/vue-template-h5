export async function setup() {
  await installMockService()
}

async function installMockService() {
  if (import.meta.env.DEV && import.meta.env.VITE_MOCK_ENABLE === 'true') {
    return import('../mock/browser').then(({ worker }) => worker.start())
  }
}
