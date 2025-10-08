/// <reference types="vite/client" />

interface ImportMeta {
  glob(pattern: string, options?: any): Record<string, string>;
}

export {};
