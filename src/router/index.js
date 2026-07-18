import { createRouter, createWebHistory } from 'vue-router';

import Login from "@/views/Login.vue";
import UpdatePassword from "@/views/UpdatePassword.vue";
import AllProjects from "@/views/AllProjects.vue";
import NewProject from '@/views/NewProject.vue';
import { authState } from '@/lib/authState';
import { getSession } from '@/lib/auth';

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/update-password',
        name: 'update-password',
        component: UpdatePassword
    },
    {
        path: '/projects',
        name: 'home',
        component: AllProjects,
        meta: { requiresAuth: true }
    },
    {
        path: '/my-projects',
        name: 'my-projects',
        component: AllProjects,
        meta: { requiresAuth: true }
    },
    {
        path: '/new-project',
        name: 'new-project',
        component: NewProject,
        meta: { requiresAuth: true }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to) => {
    // Make sure we've checked for an existing session before deciding
    if (authState.loading) {
        authState.session = await getSession();
        authState.loading = false;
    }

    if (to.meta.requiresAuth && !authState.session) {
        return { name: 'login' };
    }

    if (to.name === 'login' && authState.session) {
        return { name: 'home' };
    }
});

export default router;