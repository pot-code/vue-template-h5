/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENDPOINT: string
  readonly VITE_MOCK_ENABLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
