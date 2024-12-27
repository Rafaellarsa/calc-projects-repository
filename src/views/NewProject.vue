<template>
    <v-main>
        <v-card>
            <v-form>
                <v-container fluid>
                    <v-card-text class="pa-8 pb-5">
                        <v-row><v-col>
                                <v-text-field label="Project Title" hide-details v-model="title" />
                            </v-col></v-row>
                    </v-card-text>
                    <v-card-text class="pa-8 pt-0">
                        <v-row><v-col>
                                <v-combobox label="Department" :items="allDepartments.sort()" v-model="department"
                                    hide-details multiple /> </v-col><v-col>
                                <v-combobox label="Major" :items="allMajors.sort()" v-model="major" hide-details
                                    multiple /> </v-col></v-row><v-row>
                            <v-col>
                                <v-text-field label="Topic" v-model="topic" hide-details /> </v-col><v-col>
                                <v-autocomplete label="Keywords" :items="allKeywords.sort()" v-model="keywords"
                                    hide-details chips closable-chips multiple />
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
                            <v-col>
                                <v-file-input accept=".pdf" label="Project PDF" />
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-container>

                <v-card-actions class="pa-8 pt-0">
                    <v-spacer />
                    <!-- <v-btn @click="onClear"> Clear </v-btn> -->
                    <v-btn variant="outlined" @click="createProject">
                        Create
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-main>
</template>

<script>
import allKeywords from "../mockedData/keywords.json";
import allDepartments from "../mockedData/departments.json";
import allMajors from "../mockedData/majors.json";

export default {
    data: () => ({
        title: "",
        department: [],
        major: [],
        topic: "",
        keywords: [],
        difficulty: [],
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
        createProject() { }
    },
};
</script>