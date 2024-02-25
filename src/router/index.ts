import { createRouter, createWebHistory } from 'vue-router';

export const routes = [
  {
    path: '/ui',
    name: 'ui',
    component: async () => (await import('@/pages/ui')).Ui
  }
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});
