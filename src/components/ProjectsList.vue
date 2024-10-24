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
        department: "Physics & Astronomy",
        major: "Physics and Astronomy",
        topic: "Taylor Series",
        keywords: [
          "Rayleigh-Jeans Law",
          "Taylor Series",
          "Applications of Taylor Series",
          "Planck Law",
          "Astronomy",
          "Stars",
          "Blackbody Radiation",
        ],
        nStudents: 1,
        difficulty: 1,
        hours: 8,
        description:
          "This project uses Taylor Series to compare the Rayleigh-Jeans and Planck Laws, each of which attempts to measure the energy density of blackbody radiation as a function of its wavelength. These laws make similar predictions for long wavelengths, but not short ones.",
      },
      {
        title: "Calculus and Baseball",
        department: "Physics",
        major: "Physics",
        topic: "Applications to Physics/Engineering, Differential Equations",
        keywords: [
          "Baseball",
          "Force",
          "Momentum",
          "Impulse",
          "Work",
          "Kinetic Energy",
          "Position",
          "Velocity",
          "Acceleration",
          "Differential Equations",
        ],
        nStudents: 1,
        difficulty: 1,
        hours: 12,
        description:
          "This project explores three different applications of calculus to baseball concepts. They are (1) the impulse of a bat hitting a ball, (2) the work done to throw a pitch, and (3) the time it takes for a team to get a ball from the outfield to home plate.",
      },
      {
        title: "Patterns in Integrals",
        department: "Mathematics",
        major: "Mathematics",
        topic:
          "u-Substitution, Integration by Parts, Partial Fraction Decomposition",
        keywords: [
          "Integrals",
          "Integration Techniques",
          "u-Substitution",
          "Integration by Parts",
          "Partial Fraction Decomposition",
          "Integral Calculators",
          "Computer Algebra System",
          "Trig Identities",
          "Mathematical Induction",
          "Sum Notation",
        ],
        nStudents: 1,
        difficulty: 0,
        hours: 6,
        description:
          "This project has students analyze four patterns in various integrals. After using a computer algebra system (integral solver) to solve a set of similar-looking integrals, students are asked to guess and then prove the general pattern. Note that the fourth question is solved using mathematical induction (and should thus be heavily scaffolded or removed).",
      },
      {
        title: "The Gini Index",
        department: "Economics",
        major: "Economics",
        topic: "Area Between Curves",
        keywords: [
          "Gini Index",
          "Economics",
          "Area",
          "Graph Modeling",
          "Quadratic Model",
          "Power Model",
        ],
        nStudents: 1,
        difficulty: 0,
        hours: 4,
        description:
          "This project works with the Gini Index, which is a measure of income inequality, based on given data. Students will answer some theoretical questions on the Gini Index, then use a computer-given quadratic model and power model on given data to compute the Gini index.",
      },
      {
        title: "Rotating on a Slant",
        department: "Engineering",
        major: "Engineering",
        topic: "Area Between Curves, Volumes",
        keywords: [
          "Volumes",
          "Discs/Washers",
          "Area",
          "Integrals",
          "Riemann Sums",
        ],
        nStudents: 1,
        difficulty: 2,
        hours: 8,
        description:
          "This project asks students to derive a formula to compute the volume of the solid of revolution about a line y=mx+b (instead of the standard x-axis or y-axis). To scaffold this, they are first asked to derive a formula for the area between a curve and the slanted axis.",
      },
    ],
  }),
};
</script>
