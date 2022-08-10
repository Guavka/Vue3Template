<script setup lang="ts">
import image404 from '~assets/404.png'

const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <v-img :src="image404" width="60%" class="ma-auto"></v-img>
  <h2>{{ t('text404.title') }}</h2>
  <h3 class="mt-5"> {{ t('text404.desc') }}</h3>
  <v-btn class="mt-5" @click="router.back()">
    {{ t('button.back') }}
  </v-btn>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
