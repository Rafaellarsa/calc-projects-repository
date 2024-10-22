<template>
  <!-- Check https://vuetifyjs.com/en/components/cards/#custom-actions -->
  <v-card>
    <v-form>
      <v-container fluid>
        <v-card-text class="pa-8 pb-5">
          <v-row
            ><v-col>
              <v-text-field
                label="Project Title"
                hide-details
                :append-inner-icon="expanded ? '' : 'mdi-magnify'"
                @click:append-inner=""
              />
            </v-col>
            <v-col cols="auto">
              <v-btn
                flat
                :append-icon="
                  expanded
                    ? 'mdi-unfold-less-horizontal'
                    : 'mdi-unfold-more-horizontal'
                "
                class="mt-3"
                @click="expanded = !expanded"
                >{{ expanded ? "Reduce" : "Expand" }}</v-btn
              ></v-col
            ></v-row
          >
        </v-card-text>
        <v-card-text class="pa-8 pt-0" v-if="expanded">
          <v-row
            ><v-col>
              <v-combobox
                label="Department"
                :items="[
                  'Physics & Astronomy',
                  'Electrical & Computing Engineering',
                ]"
                hide-details
              /> </v-col
            ><v-col>
              <v-combobox
                label="Major"
                :items="[
                  'Physics and Astronomy',
                  'Electrical Engineering',
                  'Computing Engineering',
                ]"
                hide-details
              /> </v-col></v-row
          ><v-row>
            <v-col> <v-text-field label="Topic" hide-details /> </v-col
            ><v-col>
              <v-autocomplete
                label="Keywords"
                :items="[
                  'Taylor Series',
                  'Planck Law',
                  'Stars',
                  'Blackbody Radiation',
                ]"
                hide-details
                chips
                closable-chips
                multiple
              /> </v-col></v-row
          ><v-row>
            <v-col>
              <v-row><v-label class="pl-3">Difficulty</v-label></v-row>
              <v-row>
                <v-checkbox label="Easy" value="Easy" />
                <v-checkbox label="Medium" value="Medium" />
                <v-checkbox label="Difficult" value="Difficult" />
              </v-row>
            </v-col>
            <v-col>
              <v-range-slider
                label="Number of Students"
                step="1"
                min="1"
                max="10"
                show-ticks
                thumb-label
              />
            </v-col>
          </v-row>
        </v-card-text>
      </v-container>

      <v-card-actions class="pa-8 pt-0" v-if="expanded">
        <v-spacer />
        <v-btn> Clear </v-btn>
        <v-btn append-icon="mdi-magnify" variant="outlined"> Search </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    expanded: false,
  }),
};
</script>
