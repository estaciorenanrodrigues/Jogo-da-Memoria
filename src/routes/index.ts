import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

import Login from "../pages/Login.vue";
import Play from '../pages/Play.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: "login",
        component: Login,
    },
    {
        path: '/play',
        name: "play",
        component: Play,
        meta: {
            requiresAuth: true
        }
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const isAuthenticated = () => {
    return
    const value = localStorage.getItem('key')
}

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        const token = localStorage.getItem('key');
        if (token) {
            next();
        } else {
            next('/');
        }
    } else {
        next();
    }

})

export default router;
