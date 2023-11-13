import * as VueRouter from "vue-router";

const routes = [
    {
        name: 'users.login',
        path: '/login',
        component: () => import('./components/User/Login.vue')
    },
    {
        name: 'users.registration',
        path: '/registration',
        component: () => import('./components/User/Registration.vue')
    },
    {
        name: 'users.personal',
        path: '/personal',
        component: () => import('./components/User/Personal.vue')
    },
    {
        name: 'fruits.index',
        path: '/fruits',
        component: () => import('./components/Fruit/Index.vue')
    }
];

export default new VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: routes
})
