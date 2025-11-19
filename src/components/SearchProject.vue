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
                " class="mt-3" @click="expanded = !expanded">{{ expanded ? "Less" : "More"}}</v-btn></v-col></v-row>
        </v-card-text>
        <v-card-text class="pa-8 pt-0" v-if="expanded">
          <v-row><v-col>
              <v-combobox label="Departments" :items="allDepartments.sort()" v-model="departments" hide-details
                multiple /> </v-col><v-col>
              <v-combobox label="Majors" :items="allMajors.sort()" v-model="majors" hide-details multiple />
            </v-col></v-row><v-row>
            <v-col>
            <v-combobox label="Topics" :items="allTopics.sort()" v-model="topics" hide-details
                multiple />  </v-col><v-col>
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
import searchFields from "../mockedData/searchFields.json";

export default {
  props: ["allProjects"],
  data: () => ({
    expanded: false,
    title: "",
    departments: [],
    majors: [],
    topics: [],
    keywords: [],
    difficulty: [0, 1, 2],
    allKeywords: searchFields.keywords,
    allDepartments: searchFields.departments,
    allMajors: searchFields.majors,
    allTopics: searchFields.topics
  }),
  methods: {
    onClear() {
      this.title = "";
      this.departments = [];
      this.majors = [];
      this.topics = [];
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

      if (this.topics.length) {
        newProjects = newProjects.filter((project) =>
          project.topics.some((topics) => this.topics.includes(topics))
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

      if (this.departments.length) {
        newProjects = newProjects.filter((project) =>
          project.departments.some((departments) =>
            this.departments.includes(departments)
          )
        );
      }

      if (this.majors.length) {
        newProjects = newProjects.filter((project) =>
          project.majors.some((majors) => this.majors.includes(majors))
        );
      }

      this.$emit("search", newProjects);
    },
  },
};
</script>
