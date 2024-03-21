import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import uno from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import svg from 'vite-svg-loader'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'
import { viteVConsole as vconsole } from 'vite-plugin-vconsole'
import { legacySupport } from './build/env'

const legacyTarget = ['Chrome 64']

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: legacySupport(mode) ? legacyTarget : undefined,
    terserOptions: {
      compress:
        mode === 'production'
          ? {
              drop_console: true,
              drop_debugger: true,
            }
          : false,
    },
  },
  plugins: [
    vue(),
    jsx(),
    uno(),
    Components({
      resolvers: [VantResolver(), IconsResolver()],
    }),
    AutoImport({
      eslintrc: {
        enabled: true,
        filepath: '.eslintrc-auto-import.json',
      },
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
      imports: ['vue', 'vue-router', 'vitest'],
    }),
    vconsole({
      entry: path.resolve('src/main.ts'), // or you can use entry: [path.resolve('src/main.ts')]
      enabled: mode === 'production',
    }),
    Icons({
      scale: 1,
    }),
    svg({
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
        ],
      },
    }),
    legacySupport(mode) &&
      legacy({
        targets: legacyTarget,
      }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, 'e2e/*'],
    root: fileURLToPath(new URL('./', import.meta.url)),
    globals: true,
    passWithNoTests: true,
  },
}))
