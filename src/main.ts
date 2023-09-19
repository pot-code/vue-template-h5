import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import { HttpError } from './core/http/error'
import App from './app.vue'
import router from './router'
import setup from './setup'
import scroll from './directives/scroll'

import './styles/main.scss'
import 'virtual:uno.css'

const app = createApp(App)

app.use(createPinia())
app.use(VueQueryPlugin, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry(failureCount, error) {
          if (error instanceof HttpError && [401, 403, 500].indexOf(error.code) > -1) {
            return false
          }
          return failureCount < 3
        },
      },
    },
  },
})

app.directive('scroll', scroll)

setup().then(() => {
  app.use(router)
  app.mount('#app')
})
