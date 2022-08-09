/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
  readonly VITE_TITLE: string
  readonly VITE_SHORT_TITLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
