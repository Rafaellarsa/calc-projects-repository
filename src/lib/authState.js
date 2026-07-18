import { reactive } from 'vue';
import { getSession, onAuthStateChange } from './auth';

export const authState = reactive({
    session: null,
    loading: true,
});

getSession().then((session) => {
    authState.session = session;
    authState.loading = false;
});

onAuthStateChange((session) => {
    authState.session = session;
});