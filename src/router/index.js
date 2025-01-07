
import { createRouter, createWebHistory } from 'vue-router';

import Login from "@/views/Login.vue";
import AllProjects from "@/views/AllProjects.vue";
import NewProject from '@/views/NewProject.vue';

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/projects',
        name: 'home',
        component: AllProjects
    },
    {
        path: '/my-projects',
        name: 'my-projects',
        component: AllProjects
    },
    {
        path: '/new-project',
        name: 'new-project',
        component: NewProject
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;