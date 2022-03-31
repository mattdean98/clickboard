import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
// import './registerServiceWorker';
import router from './router';

import 'bulma';

createApp(App).use(router).use(createPinia()).mount('#app');
