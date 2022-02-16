import Vue from 'vue'
import VueRouter from 'vue-router'
import config from '@config'
import routes from '@pc-routes'
import { get } from 'lodash-es'

Vue.use(VueRouter)

const defaultLanguage = get(config, 'defaultLanguage')
const redirect = get(config, 'redirect')

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

export default router
