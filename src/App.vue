<template>
  <v-app>
    <AppHeader v-if="currentRouteName != 'login'" />
    <RouterView />

    <!-- <AppFooter /> -->
  </v-app>
</template>

<script>
export default {
  computed: {
  currentRouteName() {
      console.log(this.$route.name)
      return this.$route.name;
  }
}
}
</script>