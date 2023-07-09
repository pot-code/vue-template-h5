import { defineConfig } from 'unocss'
import PresetMini from '@unocss/preset-mini'
import PresetRemToPx from '@unocss/preset-rem-to-px'
import Directives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [PresetMini(), PresetRemToPx()],
  transformers: [Directives()],
  theme: {
    colors: {
      primary: 'var(--van-primary-color)',
      success: 'var(--van-success-color)',
      warning: 'var(--van-warning-color)',
      danger: 'var(--van-danger-color)',
    },
  },
})
