import type { RouteRecordRaw } from 'vue-router';
import Login from "../pages/Login.vue";


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Login,
    },

];
export default routes;