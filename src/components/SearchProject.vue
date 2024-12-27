<template>
  <!-- Check https://vuetifyjs.com/en/components/cards/#custom-actions -->
  <v-card>
    <v-form>
      <v-container fluid>
        <v-card-text class="pa-8 pb-5">
          <v-row><v-col>
              <v-text-field label="Project Title" hide-details :append-inner-icon="expanded ? '' : 'mdi-magnify'"
                @click:append-inner="onShortSearch" v-model="title" />
            </v-col>
            <v-col cols="auto">
              <v-btn flat :append-icon="expanded
                ? 'mdi-unfold-less-horizontal'
                : 'mdi-unfold-more-horizontal'
                " class="mt-3" @click="expanded = !expanded">{{ expanded ? "Reduce" : "Expand"
                }}</v-btn></v-col></v-row>
        </v-card-text>
        <v-card-text class="pa-8 pt-0" v-if="expanded">
          <v-row><v-col>
              <v-combobox label="Department" :items="allDepartments.sort()" v-model="department" hide-details
                multiple /> </v-col><v-col>
              <v-combobox label="Major" :items="allMajors.sort()" v-model="major" hide-details multiple />
            </v-col></v-row><v-row>
            <v-col>
              <v-text-field label="Topic" v-model="topic" hide-details /> </v-col><v-col>
              <v-autocomplete label="Keywords" :items="allKeywords.sort()" v-model="keywords" hide-details chips
                closable-chips multiple />
            </v-col></v-row>
          <v-row>
            <v-col>
              <v-row><v-label class="pl-3">Difficulty</v-label></v-row>
              <v-row>
                <v-checkbox label="Easy" :value="0" v-model="difficulty" />
                <v-checkbox label="Medium" :value="1" v-model="difficulty" />
                <v-checkbox label="Difficult" :value="2" v-model="difficulty" />
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
      </v-container>

      <v-card-actions class="pa-8 pt-0" v-if="expanded">
        <v-spacer />
        <v-btn @click="onClear"> Clear </v-btn>
        <v-btn append-icon="mdi-magnify" variant="outlined" @click="onSearch">
          Search
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import allKeywords from "../mockedData/keywords.json";
import allDepartments from "../mockedData/departments.json";
import allMajors from "../mockedData/majors.json";

export default {
  props: ["allProjects"],
  data: () => ({
    expanded: false,
    title: "",
    department: [],
    major: [],
    topic: "",
    keywords: [],
    difficulty: [0, 1, 2],
    allKeywords,
    allDepartments,
    allMajors
  }),
  methods: {
    onClear() {
      this.title = "";
      this.department = [];
      this.major = [];
      this.topic = "";
      this.keywords = [];
      this.difficulty = [0, 1, 2];
    },
    onShortSearch() {
      let newProjects = JSON.parse(JSON.stringify(this.allProjects));

      if (this.title) {
        newProjects = newProjects.filter((project) =>
          project.title.toUpperCase().includes(this.title.toUpperCase())
        );
      }

      this.$emit("search", newProjects);
    },
    onSearch() {
      let newProjects = JSON.parse(JSON.stringify(this.allProjects));

      if (this.title) {
        newProjects = newProjects.filter((project) =>
          project.title.toUpperCase().includes(this.title.toUpperCase())
        );
      }

      if (this.topic) {
        newProjects = newProjects.filter((project) =>
          project.topic.toUpperCase().includes(this.topic.toUpperCase())
        );
      }

      newProjects = newProjects.filter((project) =>
        this.difficulty.includes(project.difficulty)
      );

      if (this.keywords.length) {
        newProjects = newProjects.filter((project) =>
          project.keywords.some((keyword) => this.keywords.includes(keyword))
        );
      }

      if (this.department.length) {
        newProjects = newProjects.filter((project) =>
          project.department.some((department) =>
            this.department.includes(department)
          )
        );
      }

      if (this.major.length) {
        newProjects = newProjects.filter((project) =>
          project.major.some((major) => this.major.includes(major))
        );
      }

      this.$emit("search", newProjects);
    },
  },
};
</script>
