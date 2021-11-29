import VueRouter from 'vue-router'
const routes = [
    {
        path:'/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/credits',
        name: 'Credits',
        component: ()=> import('../views/Credits.vue')
    },
    {
        path: '/documentation',
        name: 'Documentation',
        component: ()=> import('../views/Documentation.vue')
    }
]

import Home from '@/views/Home'
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router