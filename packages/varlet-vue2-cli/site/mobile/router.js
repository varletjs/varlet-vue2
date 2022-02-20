import routes from '@mobile-routes'
import config from '@config'
import VueRouter from 'vue-router'
import Vue from 'vue'
import { get } from 'lodash-es'
import { inIframe, isPhone } from '../utils'

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalReplace.call(this, location, onResolve, onReject)
  }
  return originalReplace.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const redirect = get(config, 'mobile.redirect')
const defaultLanguage = get(config, 'defaultLanguage')

if (redirect) {
  routes.push({
    path: '*',
    redirect
  })
}

routes.push({
  path: '/home',
  component: () => import('./components/AppHome.vue')
})

const router = new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes,
})

router.beforeEach((to, from, next) => {
  const language = to.query.language ?? defaultLanguage
  const path = to.path
  const replace = to.query.replace

  if (!isPhone() && !inIframe()) {
    window.location.href = `./#/${language}${path}`
    return
  }

  if (!isPhone() && inIframe()) {
    window.top.onMobileRouteChange(path, language, replace)
  }

  if (window._hmt) {
    if (to.path) {
      // @ts-ignore
      window._hmt.push(['_trackPageview', `/#${to.fullPath}`])
    }
  }

  next()
})

export default router
