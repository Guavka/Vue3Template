<template>
  <v-switch v-model="isLight" :true-icon="lightIconComp" :false-icon="darkIconComp" :density="densityComp"
    :hide-details="hideDetailsComp" :inset="insetComp" width="min-content" style="max-width:fit-content" />
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify/lib/framework.mjs';

export interface ThemeTogglerProp {
  cLightIcon?: string,
  cDarkIcon?: string,
  cDensity?: 'compact' | 'default' | 'comfortable',
  cHideDetails?: boolean,
  cInset?: boolean,
  cLightThemeName?: string,
  cDarkThemeName?: string,
}
const props = defineProps<ThemeTogglerProp>()

const lightIconComp = computed(() => props.cLightIcon || 'mdi-weather-sunny')
const darkIconComp = computed(() => props.cDarkIcon || 'mdi-weather-night')
const densityComp = computed(() => props.cDensity || 'default')
const hideDetailsComp = computed(() => props.cHideDetails || true)
const insetComp = computed(() => props.cInset || true)
const lightThemeNameComp = computed(() => props.cLightThemeName || 'light')
const darkThemeNameComp = computed(() => props.cDarkThemeName || 'dark')

const theme = useTheme()

const isLight = ref(!theme.global.current.value.dark)

watch(isLight, (value: boolean) => {
  theme.global.name.value = value ? lightThemeNameComp.value : darkThemeNameComp.value

  useLocalStorage('theme', theme.global.name.value).value = theme.global.name.value
})
</script>