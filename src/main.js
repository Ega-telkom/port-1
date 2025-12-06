import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';
import 'leaflet/dist/leaflet.css';
import VueCalendarHeatmap from 'vue3-calendar-heatmap'

const app = createApp(App);
app.use(router);
app.use(VueCalendarHeatmap);
app.mount('#app');
