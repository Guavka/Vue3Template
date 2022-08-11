<template>
  <v-menu :transition="transitionComp">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props">
        <v-badge :color="colorsComp.badge" :content="notifyArrayComp.length" :max="maxValueComp">
          <v-icon :size="iconSizeComp">{{ notifyIconComp }}</v-icon>
        </v-badge>
      </v-btn>
    </template>
    <v-list :density="densityComp">
      <v-list-subheader>{{ titleComp }}</v-list-subheader>
      <v-list-item v-for="(item, i) in notifyArrayComp" :key="i" :value="item">
        <template v-slot:prepend>
          <v-icon :icon="item.icon" :color="titleColorFunc(item.text)">
          </v-icon>
        </template>
        <template v-slot:default>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </template>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify/lib/framework.mjs';

export interface NotificationProp {
  cNotifications: NotificationData[],
  cIcon?: string,
  cTransition?: string,
  cBadgeColor?: string,
  cIconSize?: string,
  cMaxValue?: number,
  cColors?: NotificationColors,
  cDensity?: 'compact' | 'default' | 'comfortable',
  cTitle?: string
}

export interface NotificationData {
  text: string,
  icon: string
}

export interface NotificationColors {
  badge: string,
  success: string,
  error: string,
  info: string
}

const props = defineProps<NotificationProp>()

const notifyIconComp = computed(() => props.cIcon || 'mdi-bell')
const transitionComp = computed(() => props.cTransition || 'scale-transition')
const iconSizeComp = computed(() => props.cIconSize || 'large')
const maxValueComp = computed(() => props.cMaxValue || 5)
const densityComp = computed(() => props.cDensity || 'default')
const titleComp = computed(() => props.cTitle || 'Report')
const notifyArrayComp = computed(() => {
  return props.cNotifications || [
    { text: '+1000', icon: 'mdi-arrow-up' }
  ]
})
const colorsComp = computed(() => {
  const theme = useTheme()
  const defaultColors: NotificationColors = {
    badge: theme.current.value.colors.error,
    error: theme.current.value.colors.error,
    info: theme.current.value.colors.info,
    success: theme.current.value.colors.success
  }
  return props.cColors || defaultColors
})

const titleColorFunc = (text: string) => {
  const res = Number.parseInt(text)
  let color = colorsComp.value.info
  if (res) {
    color = res > 0 ? colorsComp.value.success : colorsComp.value.error
  }
  return color
}
</script>

<style scoped>
</style>