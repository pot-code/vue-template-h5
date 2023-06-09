import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import SvgLoader from 'vite-svg-loader'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'
import { viteVConsole } from 'vite-plugin-vconsole'

const buildTarget = ['Chrome 64']

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: buildTarget,
  },
  plugins: [
    vue(),
    VueJsx(),
    UnoCSS(),
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
      enabled: false,
    }),
    Icons({
      scale: 1,
      defaultClass: 'icon',
    }),
    SvgLoader({
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
