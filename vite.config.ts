import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import path from 'path';

import Vue from '@vitejs/plugin-vue';

import Pages from 'vite-plugin-pages'
import generateSitemap from 'vite-ssg-sitemap'
import Layouts from 'vite-plugin-vue-layouts'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VitePWA } from 'vite-plugin-pwa'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import Inspect from 'vite-plugin-inspect'
import Markdown from 'vite-plugin-vue-markdown'
import LinkAttributes from 'markdown-it-link-attributes'
import Shiki from 'markdown-it-shiki'

import vuetify from 'vite-plugin-vuetify';

const folderURL = new URL(import.meta.url)
const srcURL = new URL('src/', folderURL)

const autoImportPath = fileURLToPath(new URL('configs/', folderURL))
const srcPath = fileURLToPath(srcURL)

const assetsPath = fileURLToPath(new URL('assets/', srcURL))
const layoutsPath = fileURLToPath(new URL('layouts/', srcURL))
const modulesPath = fileURLToPath(new URL('modules/', srcURL))
const pagesPath = fileURLToPath(new URL('pages/', srcURL))
const pluginsPath = fileURLToPath(new URL('plugins/', srcURL))
const storePath = fileURLToPath(new URL('storePath/', srcURL))
const stylesPath = fileURLToPath(new URL('styles/', srcURL))

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~src': srcPath,
      '~modules': modulesPath,
      '~plugins': pluginsPath,
      '~assets': assetsPath,
      '~layouts': layoutsPath,
      '~srcPages': pagesPath,
      '~store': storePath,
      '~styles': stylesPath
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),
    Pages({
      extensions: ['vue', 'md'],
    }),
    Layouts(),
    vuetify({ autoImport: true }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        'vue/macros',
        '@vueuse/head',
        '@vueuse/core',
      ],
      eslintrc: {
        enabled: true,
        filepath: path.resolve(autoImportPath, '.eslintrc-auto-import.json'),
      },
      dirs: [
        'src/store',
        'src/modules/**/store'
      ],
      vueTemplate: true,
      dts: path.resolve(autoImportPath, 'auto-imports.d.ts'),
    }),
    Components({
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dirs: ["src/modules/widgets"],
      dts: path.resolve(autoImportPath, 'components.d.ts'),
    }),
    Markdown({
      wrapperClasses: 'prose prose-sm m-auto text-left',
      headEnabled: true,
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Shiki, {
          theme: {
            light: 'vitesse-light',
            dark: 'vitesse-dark',
          },
        })
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
      },
    }),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'Template',
        short_name: 'Template',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),

    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    vueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),
    Inspect(),
  ],
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'happy-dom',
    deps: {
      inline: ['@vue', '@vueuse', 'vue-demi', 'vuetify'],
    },
  },

  ssr: {
    // TODO: workaround until they support native ESM
    noExternal: ['workbox-window', 'vue-i18n', 'vuetify'],
  },

  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    onFinished() { generateSitemap() },
  },
});
