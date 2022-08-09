import NProgress from 'nprogress'
import { type UserPlugin } from '~/types'

export const install: UserPlugin = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach((to, from) => {
      if (to.path !== from.path)
        NProgress.start()
    })
    router.afterEach(() => { NProgress.done() })
  }
}
