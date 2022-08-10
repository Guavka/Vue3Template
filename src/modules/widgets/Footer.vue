<script setup lang="ts">
import { useTheme } from 'vuetify/lib/framework.mjs';

const theme = useTheme()

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}

const toggleTheme = () => {
  const storage = useLocalStorage('theme', theme.global.name.value)

  theme.global.name.value = theme.global.name.value === 'lightTheme' ? 'darkTheme' : 'lightTheme'
  storage.value = theme.global.name.value
}
</script>

<template>
  <div class="d-flex">
    <v-btn>
      <router-link to="/" :title="t('button.home')">
        <v-icon icon="mdi-home" />
      </router-link>
    </v-btn>

    <v-btn :title="t('button.toggle_dark')" @click="toggleTheme">
      <v-icon icon="mdi-weather-sunny dark:mdi-weather-night" />
    </v-btn>

    <v-btn :title="t('button.toggle_langs')" @click="toggleLocales">
      <v-icon icon="mdi-ab-testing" />
    </v-btn>
  </div>
</template>
