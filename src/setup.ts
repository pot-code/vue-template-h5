export async function setup() {
  if (import.meta.env.DEV && import.meta.env.VITE_MOCK_ENABLE === 'true') {
    await installMockService()
  }
}

async function installMockService() {
  return import('../mock/browser').then(({ worker }) => worker.start())
}
