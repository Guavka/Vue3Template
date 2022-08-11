<template>
  <v-btn :to="pathComp" :variant="variantComp">
    <v-icon :icon="iconComp" :size="sizeComp" />
  </v-btn>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

export interface GoHomeBtnProp {
  cPath?: string,
  cVariantActive?: "tonal" | "text" | "flat" | "elevated" | "outlined" | "plain",
  cVariantDeactivate?: "tonal" | "text" | "flat" | "elevated" | "outlined" | "plain",
  cIcon?: string,
  cSize?: 'x-small' | 'small' | 'default' | 'large' | 'x-large'
}

const props = defineProps<GoHomeBtnProp>()

const route = useRoute()

const iconComp = computed(() => props.cIcon || 'mdi-view-dashboard')
const pathComp = computed(() => props.cPath || '/')
const activeComp = computed(() => props.cVariantActive || 'tonal')
const deactivateComp = computed(() => props.cVariantDeactivate || 'text')
const variantComp = computed(() => route.path === pathComp.value ? activeComp.value : deactivateComp.value)
const sizeComp = computed(() => props.cSize || 'default')
</script>

<style scoped>
</style>