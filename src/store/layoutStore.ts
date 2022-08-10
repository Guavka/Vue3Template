import { acceptHMRUpdate, defineStore } from 'pinia'

export const useLayoutStore = defineStore('layoutStore', () => {
  const isShowDrawerState = ref(true)

  const isShowDrawer = computed(() => isShowDrawerState.value)

  function toggleDrawer() {
    isShowDrawerState.value = !isShowDrawerState.value
  }

  return {
    isShowDrawer,
    toggleDrawer,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useLayoutStore, import.meta.hot))