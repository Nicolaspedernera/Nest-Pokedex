/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENDPOINT_URI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
