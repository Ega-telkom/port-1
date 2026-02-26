import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from './i18n'
import './style.css'
import 'leaflet/dist/leaflet.css'
import '@ibm/plex-mono/css/ibm-plex-mono-all.css'
import 'material-icons/iconfont/material-icons.css';

createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app')
