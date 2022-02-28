import type { VueConstructor } from 'vue'
import PullRefresh from './PullRefresh.vue'

PullRefresh.install = function (app: VueConstructor) {
  app.component(PullRefresh.name, PullRefresh)
}

export const _PullRefreshComponent = PullRefresh

export default PullRefresh
