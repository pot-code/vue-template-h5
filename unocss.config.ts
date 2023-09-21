import { defineConfig, presetMini, transformerDirectives } from 'unocss'
import PresetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [presetMini(), PresetRemToPx()],
  transformers: [transformerDirectives()],
  theme: {
    colors: {
      primary: 'var(--van-primary-color)',
      success: 'var(--van-success-color)',
      warning: 'var(--van-warning-color)',
      danger: 'var(--van-danger-color)',
      background: 'var(--van-background)',
    },
  },
})
