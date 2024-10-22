<template>
  <v-container class="mt-6">
    <v-row
      justify="center"
      class="mb-3"
      v-for="(project, i) in projects"
      :key="i"
    >
      <v-card width="100%">
        <v-card-title>
          {{ project.title }}
        </v-card-title>
        <v-card-text>
          {{ project.description }}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn icon="mdi-eye-outline" size="small"></v-btn>

          <v-btn icon="mdi-file-edit-outline" size="small"></v-btn>

          <v-btn icon="mdi-download-box" size="medium"></v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    projects: [
      {
        title: "Radiation from the Stars",
        description:
          "This project uses Taylor Series to compare the Rayleigh-Jeans and Planck Laws, each of which attempts to measure the energy density of blackbody radiation as a function of its wavelength. These laws make similar predictions for long wavelengths, but not short ones.",
      },
      {
        title: "Arc Length Contest",
        description: "Description of the project Arc Length Contest.",
      },
      {
        title: "Calculus and Baseball",
        description: "Description of the project Calculus and Baseball.",
      },
    ],
  }),
};
</script>
