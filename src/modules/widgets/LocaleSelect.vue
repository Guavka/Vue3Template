<template>
  <v-select :items="availableLocales" :variant="variantComp" v-model="locale"></v-select>
</template>

<script setup lang="ts">

export interface LocaleSelectProp {
  variant?: 'plain' | 'outlined' | 'underlined' | 'solo'
}
const props = defineProps<LocaleSelectProp>()

const variantComp = computed(() => props.variant || 'solo')

const { availableLocales, locale } = useI18n()
watch(locale, () => useLocalStorage('locale', locale.value).value = locale.value)
</script>