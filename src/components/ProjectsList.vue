<template>
  <v-container class="mt-6">
    <v-row
      justify="center"
      class="mb-3"
      v-for="(project, index) in projects"
      :key="index"
    >
      <ProjectCard :project="project" />
    </v-row>
  </v-container>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";
import projects from "../mockedData/projects.json";

export default {
  components: {
    ProjectCard,
  },
  data: () => ({
    projects: projects,
  }),
};
</script>
