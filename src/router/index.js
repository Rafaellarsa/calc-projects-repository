
import { createMemoryHistory, createRouter } from 'vue-router';

import AllProjects from "@/views/AllProjects.vue";
import NewProject from '@/views/NewProject.vue';

const routes = [
    {
        path: '/',
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
    history: createMemoryHistory(),
    routes,
});

export default router;