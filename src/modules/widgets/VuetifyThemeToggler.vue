<template>
  <v-switch v-model="isLight" :true-icon="lightIconComp" :false-icon="darkIconComp" :density="densityComp"
    :hide-details="hideDetailsComp" :inset="insetComp" width="min-content" />
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify/lib/framework.mjs';

export interface ThemeTogglerProp {
  lightIcon?: string,
  darkIcon?: string,
  density?: 'compact' | 'default' | 'comfortable',
  hideDetails?: boolean,
  inset?: boolean,
  lightThemeName?: string,
  darkThemeName?: string,
}
const props = defineProps<ThemeTogglerProp>()

const lightIconComp = computed(() => props.lightIcon || 'mdi-weather-sunny')
const darkIconComp = computed(() => props.darkIcon || 'mdi-weather-night')
const densityComp = computed(() => props.density || 'default')
const hideDetailsComp = computed(() => props.hideDetails || true)
const insetComp = computed(() => props.inset || true)
const lightThemeNameComp = computed(() => props.lightThemeName || 'light')
const darkThemeNameComp = computed(() => props.darkThemeName || 'dark')

const theme = useTheme()

const isLight = ref(!theme.global.current.value.dark)

watch(isLight, (value: boolean) => {
  theme.global.name.value = value ? lightThemeNameComp.value : darkThemeNameComp.value

  useLocalStorage('theme', theme.global.name.value).value = theme.global.name.value
})
</script>