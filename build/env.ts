import { loadEnv } from 'vite'

export function legacySupport(mode: string) {
  const envRecords = loadEnv(mode, process.cwd())
  return envRecords.VITE_LEGACY === 'true'
}
