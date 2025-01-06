import './assets/main.css';
import 'primeicons/primeicons.css';
import router from './router';

import { createApp } from 'vue';
import App from './App.vue';
import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App);

app.use(router);

app.mount('#app');