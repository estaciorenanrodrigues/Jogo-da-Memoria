import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

import routes from './routes/index.ts'
import store from './store'
import App from './App.vue'


import './style.css'


const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App)

app.use(router)
app.use(store);

app.mount('#app')
