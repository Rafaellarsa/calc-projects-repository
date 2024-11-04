<template>
  <v-app>
    <v-main>
      <AppHeader />
      <SearchProject :allProjects="allProjects" @search="onSearch" />
      <ProjectsList :projects="filteredProjects" />
    </v-main>

    <!-- <AppFooter /> -->
  </v-app>
</template>

<script>
import allProjects from "./mockedData/projects.json";

export default {
  data: () => ({
    allProjects: allProjects,
    filteredProjects: allProjects,
  }),
  methods: {
    onSearch(newProjects) {
      this.filteredProjects = newProjects;
    },
  },
};
</script>
