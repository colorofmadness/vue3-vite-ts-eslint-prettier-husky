import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/style/index.scss';
import { router } from '@/router';
import { pinia } from '@/stores'; // Create vue app

// Create vue app
const app = createApp(App);

// setup icons
const modules = import.meta.glob('./assets/icons/*.svg');
Object.values(modules).forEach(async (el) => await el());

// Register plugins
app.use(router);
app.use(pinia);

// Mount vue app
app.mount('#app');
