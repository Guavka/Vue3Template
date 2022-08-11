<template>
  <div class="d-flex align-center">
    <v-avatar :size="avatarSize" :color="avatarBgColorComp" class="pa-2">
      <v-img alt="Avatar" :src="avatarUserComp"></v-img>
    </v-avatar>
    <h3 class="ml-3 mr-1">{{ nameUserComp }}</h3>

    <v-menu :transition="transitionComp">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" :icon="btnIconComp">
        </v-btn>
      </template>
      <v-list :density="densityComp">
        <v-list-item v-for="(item, i) in menuItemsComp" :key="i" :value="item" :href="item.path" :title="item.text"
          :prepend-icon="item.icon">
        </v-list-item>
      </v-list>
    </v-menu>

  </div>
</template>

<script setup lang="ts">
import defaultUser from '~assets/defaultUser.png'

export interface UserInfo {
  name: string,
  avatar?: string
}

export interface AccountHeaderMenuItems {
  text: string,
  icon: string,
  path: string
}

export interface AccountHeader {
  cTransition?: string,
  cDensity?: 'compact' | 'default' | 'comfortable',
  cIcon?: string,
  cIconSize?: string
}

export interface AccountHeaderProp {
  cUserInfo: UserInfo,
  cAvatarSize?: string,
  cAvatarColor?: string,
  cAccountHeader?: AccountHeader,
  cMenuItems: AccountHeaderMenuItems[]
}


const props = defineProps<AccountHeaderProp>()

const nameUserComp = computed(() => props.cUserInfo?.name || 'John Dow')
const avatarUserComp = computed(() => props.cUserInfo?.avatar || defaultUser)

const avatarSize = computed(() => props.cAvatarSize || 48)
const avatarBgColorComp = computed(() => props.cAvatarColor || 'white')

const btnIconComp = computed(() => props.cAccountHeader?.cIcon || 'mdi-chevron-down')
const transitionComp = computed(() => props.cAccountHeader?.cTransition || 'scale-transition')
const densityComp = computed(() => props.cAccountHeader?.cDensity || 'default')

const menuItemsComp = computed(() => {
  return props.cMenuItems || [
    { text: 'Exit', icon: 'mdi-exit-to-app', path: '/sign-out' }
  ]
})

console.log(props.cAccountHeader)
</script>

<style scoped>
</style>