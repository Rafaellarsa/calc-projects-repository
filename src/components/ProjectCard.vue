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
          <v-col><b>Topics:</b> {{ project.topics.join(", ") }}</v-col></v-row
        ><v-row no-gutters
          ><v-col><b>Departments:</b> {{ project.departments.join(", ") }} </v-col
          ><v-col><b>Majors:</b> {{ project.majors.join(", ") }}</v-col></v-row
        >
        <v-row no-gutters>
          <v-col
            ><b>Difficulty:</b> {{ difficultyNames[project.difficulty] }}</v-col
          >
          <v-col><b>Author:</b> {{ project.author }}</v-col></v-row
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

      <v-tooltip text="Edit Project">
        <template v-slot:activator="{ props }">
          <v-btn
            icon="mdi-pencil-outline"
            size="small"
            v-bind="props"
            disabled
          />
        </template>
      </v-tooltip>
      <v-tooltip text="Download PDF">
        <template v-slot:activator="{ props }">
          <v-btn
            icon="mdi-download-box"
            size="medium"
            :href="`./projectPdfs/${project.id}.pdf`"
            download
            v-bind="props"
          />
        </template>
      </v-tooltip>
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
