import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

// TODO: #3 IMPORTANT: add Language routes

export default router;
