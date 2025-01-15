/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins';
import router from './router';
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

// Components
import App from './App.vue';

// Composables
import { createApp } from 'vue';

const app = createApp(App);

registerPlugins(app);
app.use(router);
Amplify.configure(outputs);

app.mount('#app');
