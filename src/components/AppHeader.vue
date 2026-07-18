<template>
  <v-app-bar>
    <v-app-bar-title>Project Repository</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn :to="{ name: 'home' }">All Projects</v-btn>
    <v-btn :to="{ name: 'my-projects' }">My Projects</v-btn>
    <v-btn :to="{ name: 'new-project' }">New Project</v-btn>
    <v-btn variant="plain" color="error" @click="handleLogout">
    Logout
    <v-icon icon="mdi-logout" end></v-icon>
  </v-btn>
  </v-app-bar>
</template>

<script>
  import { signOut } from '@/lib/auth';

  export default {
    methods: {
      async handleLogout () {
        try {
          await signOut();
          this.$router.push({ name: 'login' });
        } catch (err) {
          console.error('Logout failed:', err);
        }
      },
    },
  }
</script>