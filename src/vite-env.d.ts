/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_NAME: string
    readonly VITE_APP_ENV: 'dev'|'prod'
    readonly VITE_BASE_URL_DEV: string
    readonly VITE_BASE_URL_PROD: string
    readonly VITE_BASE_APP_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}