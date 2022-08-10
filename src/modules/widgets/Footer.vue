<script setup lang="ts">
import { useTheme } from 'vuetify/lib/framework.mjs';

const { t, availableLocales, locale } = useI18n()

const theme = useTheme()


const toggleDark = () => {
  console.log(theme.current.value)
}

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <div class="d-flex">
    <v-btn>
      <router-link to="/" :title="t('button.home')">
        <v-icon icon="mdi-home" />
      </router-link>
    </v-btn>

    <v-btn :title="t('button.toggle_dark')" @click="toggleDark()">
      <v-icon icon="mdi-weather-sunny dark:mdi-weather-night" />
    </v-btn>

    <v-btn :title="t('button.toggle_langs')" @click="toggleLocales()">
      <v-icon icon="mdi-ab-testing" />
    </v-btn>
  </div>
</template>
