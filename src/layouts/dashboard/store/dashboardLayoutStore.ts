import { acceptHMRUpdate, defineStore } from 'pinia'

export const useDashboardLayoutStore = defineStore('dashboardLayoutStore', () => {
  const isShowDrawerState = ref(true)

  const isShowDrawer = computed(() => isShowDrawerState.value)

  const toggleDrawer = () =>
    isShowDrawerState.value = !isShowDrawerState.value

  return {
    isShowDrawer,
    toggleDrawer,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useDashboardLayoutStore, import.meta.hot))