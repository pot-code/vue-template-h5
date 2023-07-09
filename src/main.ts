import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import setup from './setup'
import scroll from './directives/scroll'

import './styles/main.scss'
import 'vant/lib/index.css'
import 'virtual:uno.css'

const app = createApp(App)

app.use(createPinia())
app.use(VueQueryPlugin, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  },
})

app.directive('scroll', scroll)

setup().then(() => {
  app.use(router)
  app.mount('#app')
})
