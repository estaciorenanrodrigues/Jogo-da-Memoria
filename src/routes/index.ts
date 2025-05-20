import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

import Login from "../pages/Login.vue";
import Play from '../pages/Play.vue';
import { useServices } from '../services';

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


router.beforeEach((to, from, next) => {
    from.meta
    const { getDataStorage } = useServices();
    if (to.meta.requiresAuth) {
        const token = getDataStorage("key");
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
