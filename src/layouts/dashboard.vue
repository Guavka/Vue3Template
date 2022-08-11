<template>
  <DashboardHeader />
  <v-navigation-drawer></v-navigation-drawer>
  <v-main>
    <v-container class="d-flex flex-column justify-center h-100 align-center">
      <RouterView />
    </v-container>
  </v-main>
  <v-footer>
  </v-footer>
</template>

<script setup lang="ts">

</script>

<style scoped>
</style>