import { createApp } from 'vue'
import vue3GoogleLogin from 'vue3-google-login'

import router from './routes/index.ts'
import store from './store'
import App from './App.vue'

import './style.css'

const app = createApp(App)

app.use(vue3GoogleLogin, {
    clientId: import.meta.env.VITE_ID_CLIENT
})
app.use(router)
app.use(store);

app.mount('#app')
