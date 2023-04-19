import { fileURLToPath, URL } from 'node:url'

import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'node:path'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { viteVConsole } from 'vite-plugin-vconsole'
import svgLoader from 'vite-svg-loader'

const buildTarget = ['Chrome 64']

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: buildTarget,
  },
  plugins: [
    vue(),
    vueJsx(),
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
    legacy({
      targets: buildTarget,
    }),
    viteVConsole({
      entry: path.resolve('src/main.ts'), // or you can use entry: [path.resolve('src/main.ts')]
      localEnabled: true,
      enabled: true,
    }),
    Icons({
      scale: 1,
      defaultClass: 'icon',
    }),
    svgLoader({
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
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
