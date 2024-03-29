import { createApp } from 'vue'
import axios from 'axios';
import App from './App.vue'
import './assets/app.css'
import './assets/tailwind.css'
import router  from './router'
import store from './store';
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle'


axios.defaults.baseURL = 'http://localhost:8080/';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
// const app = createApp(App)
// app.use(router);
// app.mount('#app')

const app = createApp(App);


// Use router and store
app.use(router, axios);
app.use(store);

// Mount the app to the root element
app.mount('#app');


// createApp(App).use(store).use(router, axios).mount('#app');

