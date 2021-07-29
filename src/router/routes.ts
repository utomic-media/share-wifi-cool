import { RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import Legal from '@/views/Legal/Index.vue';
import PrivacyPolicy from '@/views/PrivacyPolicy/Index.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/legal',
    name: 'Legal',
    component: Legal,
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
  },
];

export default routes;
