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
import { defineConfig, loadEnv } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import { configDefaults } from 'vitest/config'
import { viteVConsole as vconsole } from 'vite-plugin-vconsole'

function legacySupportEnabled(mode: string) {
  const envRecords = loadEnv(mode, process.cwd())
  return envRecords.VITE_LEGACY === 'true'
}

function pwaSupportEnabled(mode: string) {
  const envRecords = loadEnv(mode, process.cwd())
  return envRecords.VITE_PWA_ENABLED === 'true'
}

const legacyTarget = ['Chrome 64']

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // or "modern"
      },
    },
  },
  build: {
    target: legacySupportEnabled(mode) ? legacyTarget : undefined,
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
      dts: 'src/types/components.d.ts',
    }),
    AutoImport({
      eslintrc: {
        enabled: true,
        filepath: '.eslintrc-auto-import.json',
      },
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
      imports: ['vue', 'vue-router', 'vitest'],
      dts: 'src/types/auto-imports.d.ts',
    }),
    vconsole({
      entry: path.resolve('src/main.ts'), // or you can use entry: [path.resolve('src/main.ts')]
      enabled: mode !== 'production',
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
    pwaSupportEnabled(mode) &&
      VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          theme_color: '#ffffff',
        },
      }),
    legacySupportEnabled(mode) &&
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
