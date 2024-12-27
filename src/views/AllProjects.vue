<template>
    <v-main>
        <SearchProject :allProjects="allProjects" @search="onSearch" />
        <ProjectsList :projects="filteredProjects" />
    </v-main>
</template>

<script>
import allProjects from "../mockedData/projects.json";

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