import routes from '@mobile-routes'
import config from '@config'
import VueRouter from 'vue-router'
import Vue from 'vue'
import { get } from 'lodash-es'

Vue.use(VueRouter)

const redirect = get(config, 'mobile.redirect')
// const defaultLanguage = get(config, 'defaultLanguage')

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

export default router
