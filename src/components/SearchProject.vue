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
                  'Economics',
                  'Engineering',
                  'Mathematics',
                  'Physics',
                  'Physics & Astronomy',
                ]"
                hide-details
              /> </v-col
            ><v-col>
              <v-combobox
                label="Major"
                :items="[
                  'Economics',
                  'Engineering',
                  'Mathematics',
                  'Physics',
                  'Physics and Astronomy',
                ]"
                hide-details
              /> </v-col></v-row
          ><v-row>
            <v-col> <v-text-field label="Topic" hide-details /> </v-col
            ><v-col>
              <v-autocomplete
                label="Keywords"
                :items="
                  [
                    'Rayleigh-Jeans Law',
                    'Taylor Series',
                    'Applications of Taylor Series',
                    'Planck Law',
                    'Astronomy',
                    'Stars',
                    'Blackbody Radiation',
                    'Baseball',
                    'Force',
                    'Momentum',
                    'Impulse',
                    'Work',
                    'Kinetic Energy',
                    'Position',
                    'Velocity',
                    'Acceleration',
                    'Differential Equations',
                    'Integrals',
                    'Integration Techniques',
                    'u-Substitution',
                    'Integration by Parts',
                    'Partial Fraction Decomposition',
                    'Integral Calculators',
                    'Computer Algebra System',
                    'Trig Identities',
                    'Mathematical Induction',
                    'Sum Notation',
                    'Gini Index',
                    'Economics',
                    'Area',
                    'Graph Modeling',
                    'Quadratic Model',
                    'Power Model',
                    'Volumes',
                    'Discs/Washers',
                    'Riemann Sums',
                  ].sort()
                "
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
