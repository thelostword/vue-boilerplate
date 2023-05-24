import { createApp } from 'vue';
import { setupRouter } from '@/router';
import { setupStore } from '@/store';
import App from './App.vue';
// eslint-disable-next-line import/no-unresolved
import 'virtual:uno.css';

const app = createApp(App);

setupStore(app);
setupRouter(app);

app.mount('#app');
