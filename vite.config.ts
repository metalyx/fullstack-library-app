import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    root: './app/src',
    build: {
        outDir: '../../server/dist/',
    },
    // server: {
    //     origin: 'http://127.0.0.1:8080/static/',
    // },
});
