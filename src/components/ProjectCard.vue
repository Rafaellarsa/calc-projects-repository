<template>
  <v-card width="100%">
    <v-card-title>
      {{ project.title }}
    </v-card-title>
    <v-card-text>
      {{ project.description }}
    </v-card-text>

    <v-expand-transition>
      <v-card-text v-if="expand">
        <v-row no-gutters>
          <v-col><b>Topic:</b> {{ project.topic }}</v-col></v-row
        ><v-row no-gutters
          ><v-col><b>Department:</b> {{ project.department.join(", ") }} </v-col
          ><v-col><b>Major:</b> {{ project.major.join(", ") }}</v-col></v-row
        >
        <v-row no-gutters>
          <v-col
            ><b>Difficulty:</b> {{ difficultyNames[project.difficulty] }}</v-col
          >
          <v-col><b>Hours:</b> {{ project.hours }} hours</v-col></v-row
        ><v-row no-gutters>
          <v-col
            ><b>Keywords:</b> {{ project.keywords.join(", ") }}</v-col
          ></v-row
        >
      </v-card-text>
    </v-expand-transition>

    <v-card-actions>
      <v-btn
        :icon="expand ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        size="small"
        @click="expand = !expand"
      />
      <v-spacer></v-spacer>

      <v-btn icon="mdi-eye-outline" size="small" />
      <v-btn icon="mdi-file-edit-outline" size="small" />
      <v-btn icon="mdi-download-box" size="medium" />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["project"],
  data: () => ({
    expand: false,
    difficultyNames: ["Easy", "Medium", "Difficult"],
  }),
};
</script>
