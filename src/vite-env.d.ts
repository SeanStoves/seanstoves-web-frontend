/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_GOOGLE_CLIENT_ID: string;
    // Add more variables as needed
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
