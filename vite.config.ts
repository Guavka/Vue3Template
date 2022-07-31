/// <reference types="vitest" />

import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import path from 'path';

import vue from '@vitejs/plugin-vue';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Inspect from 'vite-plugin-inspect';

import vuetify from 'vite-plugin-vuetify';

const srcURL = new URL('./src', import.meta.url)
const srcPath = fileURLToPath(new URL('src', import.meta.url))
const autoImportPath = fileURLToPath(new URL('configs/', srcURL))
const modulesPath = fileURLToPath(new URL('modules/', srcURL))
const pluginsPath = fileURLToPath(new URL('plugins/', srcURL))

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom'
  },
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
    AutoImport({
      imports: [
        'vue',
        'pinia'
      ],
      eslintrc: {
        enabled: true,
        filepath: path.resolve(autoImportPath, '.eslintrc-auto-import.json'),
      },
      dirs: ['./src/modules/**/*components/*.vue'],
      dts: path.resolve(autoImportPath, 'auto-imports.d.ts'),
    }),
    Components({
      dts: path.resolve(autoImportPath, 'components.d.ts'),
    }),
    Inspect(),
  ],
  resolve: {
    alias: {
      '@src': srcPath,
      '@modules': modulesPath,
      '@plugins': pluginsPath
    },
  }
});
