<template>
  <v-app>
    <AppHeader v-if="!hideHeaderRoutes.includes(currentRouteName)" />
    <RouterView />

    <!-- <AppFooter /> -->
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      hideHeaderRoutes: ['login', 'update-password'],
    }
  },
  computed: {
    currentRouteName () {
      return this.$route.name;
    }
  }
}
</script>