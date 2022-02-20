import Vue from 'vue'
import VueRouter from 'vue-router'
import config from '@config'
import routes from '@pc-routes'
import { get } from 'lodash-es'
import { mountComponent } from '../utils'
import NProgress from './components/NProgress'

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalReplace.call(this, location, onResolve, onReject)
  }
  return originalReplace.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

let isEnd = true
const { instance } = mountComponent(NProgress)

const defaultLanguage = get(config, 'defaultLanguage')
const redirect = get(config, 'pc.redirect')
const mobileRedirect = get(config, 'mobile.redirect')

if (redirect) {
  routes.push({
    path: '*',
    redirect: `/${defaultLanguage}${redirect}`,
  })
}

const router = new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.path === from.path) {
    return
  }

  isEnd = false
  setTimeout(() => !isEnd && instance.start(), 200)

  if (window._hmt) {
    if (to.path) {
      window._hmt.push(['_trackPageview', `/#${to.fullPath}`])
    }
  }

  next()
})

router.afterEach(() => {
  isEnd = true
  instance.end()
})

Object.defineProperty(window, 'onMobileRouteChange', {
  value: (path, language, replace) => {
    if (path === mobileRedirect) {
      router.replace(`/${language}/${replace}`)
      return
    }

    router.replace(`/${language}${path}`)
  }
})

Object.defineProperty(window, 'scrollToMenu', {
  value: (docName) => {
    setTimeout(() => {
      const cell = document.getElementById(docName)
      const scroller = cell.parentNode
      scroller.scrollTo({ top: cell.offsetTop - scroller.offsetHeight / 2 })
    })
  }
})

export default router
