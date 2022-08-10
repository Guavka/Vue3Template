<template>
  <v-app-bar></v-app-bar>
  <v-navigation-drawer></v-navigation-drawer>
  <v-main>
    <v-container class="d-flex flex-column justify-center h-100 align-center">
      <RouterView />

      <Footer />
    </v-container>
  </v-main>
  <v-footer>
  </v-footer>
</template>
