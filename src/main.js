import { createApp } from 'vue'
import axios from 'axios';
import App from './App.vue'
import './assets/app.css'
import './assets/tailwind.css'
import router  from './router'
import store from './store';


axios.defaults.baseURL = 'http://localhost:8080/';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
// const app = createApp(App)
// app.use(router);
// app.mount('#app')
createApp(App).use(store).use(router, axios).mount('#app');
