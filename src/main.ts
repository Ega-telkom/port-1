import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from './i18n'
import { createHead } from '@unhead/vue/client'
import 'material-icons/iconfont/material-icons.css'
import './style.css'

const head = createHead()
createApp(App)
  .use(head)
  .use(router)
  .use(i18n)
  .mount('#app')
