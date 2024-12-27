<template>
  <v-app-bar>
    <v-app-bar-title>Project Repository</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn :to="{ name: 'home' }">All Projects</v-btn>
    <v-btn :to="{ name: 'my-projects' }">My Projects</v-btn>
    <v-btn :to="{ name: 'new-project' }">New Project</v-btn>
  </v-app-bar>
</template>
