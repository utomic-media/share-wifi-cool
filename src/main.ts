import { createApp } from 'vue';
import router from '@/router/index';
import i18n from '@/plugins/i18n/index';
import App from './App.vue';
import '@/styles/main.scss';

createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app');
