<template>
  <v-select :items="availableLocales" :variant="variantComp" v-model="locale" hide-details
    style="max-width:fit-content">
  </v-select>
</template>

<script setup lang="ts">

export interface LocaleSelectProp {
  cVariant?: 'plain' | 'outlined' | 'underlined' | 'solo'
}
const props = defineProps<LocaleSelectProp>()

const variantComp = computed(() => props.cVariant || 'solo')

const { availableLocales, locale } = useI18n()
watch(locale, () => useLocalStorage('locale', locale.value).value = locale.value)
</script>