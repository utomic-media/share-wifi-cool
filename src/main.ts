import { createApp } from 'vue';
import VueMatomo from 'vue-matomo';

import router from '@/router/index';
import i18n from '@/plugins/i18n/index';
import vueMatomoConfig from '@/plugins/matomo/index';

import App from './App.vue';
import '@/styles/main.scss';

createApp(App)
  .use(router)
  .use(i18n)
  .use(
    VueMatomo, { vueMatomoConfig },
  )
  .mount('#app');
