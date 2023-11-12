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
        name: 'fruits.index',
        path: '/fruit',
        component: () => import('./components/Fruit/Index.vue')
    }
];

export default new VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: routes
})
