import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './app.vue'
import scroll from './directives/scroll'
import router from './router'
import setup from './setup'

import 'virtual:uno.css'
import { ApiError } from './gen/api'
import './styles/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(VueQueryPlugin, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry(failureCount, error) {
          if (error instanceof ApiError && [401, 403, 500].indexOf(error.status) > -1) {
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
