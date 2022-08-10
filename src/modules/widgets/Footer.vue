<script setup lang="ts">
import { themeNames } from '~plugins/vuetify'
</script>

<template>
  <div class="d-flex">
    <v-btn>
      <router-link to="/">
        <v-icon icon="mdi-home" />
      </router-link>
    </v-btn>

    <VuetifyThemeToggler :lightThemeName='themeNames[0]' :darkThemeName='themeNames[1]' />

    <LocaleSelect />
  </div>
</template>
