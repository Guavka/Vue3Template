<template>
  <v-app-bar :id="idComp" :color="colorComp" :clipped-left="$vuetify.rtl" :clipped-right="!$vuetify.rtl"
    :height="heightComp" :flat="isFlatComp">

    <v-app-bar-nav-icon class="hidden-md-and-up" @click="layoutStore.toggleDrawer" />
    <v-app-bar-title>{{ t('header.title') }}</v-app-bar-title>
    <v-spacer />

    <ThemeToggler :cLightThemeName='themeNames[0]' :cDarkThemeName='themeNames[1]' />
    <LocaleSelect />
    <GoPathBtn />
    <NotificationBtn :c-title="t('header.notificationsTitle')" />
    <AccountHeader :c-menu-items="accountMenu" />
  </v-app-bar>
</template>

<script setup lang="ts">
import { useDashboardLayoutStore } from '../store/dashboardLayoutStore'
import { themeNames } from '~plugins/vuetify'
import { AccountHeaderMenuItems } from '~/modules/widgets/AccountHeader.vue';

export interface DashboardHeaderProp {
  id?: string,
  color?: string,
  height?: string,
  isFlat?: boolean
}
const props = defineProps<DashboardHeaderProp>()
const layoutStore = useDashboardLayoutStore()
const { t } = useI18n()

const idComp = computed(() => props.id || 'default-app-bar')
const colorComp = computed(() => props.color || 'transparent')
const heightComp = computed(() => props.height || 70)
const isFlatComp = computed(() => props.isFlat || true)

const accountMenu: AccountHeaderMenuItems[] = [
  { text: t('header.accountMenu.fullInfo'), icon: 'mdi-account', path: '/account' },
  { text: t('header.accountMenu.exit'), icon: 'mdi-exit-to-app', path: '/sign-out' }
]
</script>

<style scoped>
</style>