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
    },
    {
        name: '404',
        path: '/:catchAll(.*)',
        component: () => import('./components/Pages/404.vue')
    }
];

const route = new VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    linkActiveClass: 'active',
    routes: routes
})

route.beforeEach((to, from, next) => {

    const accessToken = localStorage.getItem('access_token')

    if (!accessToken) {
        if (to.name !== 'users.login' && to.name !== 'users.registration') {
            return next({ name: 'users.login' })
        }
    } else {
        if (to.name === 'users.login') {
            return next({ name: 'users.personal' })
        }
    }

    next()
})

export default route
