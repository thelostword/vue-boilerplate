import { createPinia } from 'pinia';

const store = createPinia();

export const setupStore = (app) => void app.use(store);
export default store;
