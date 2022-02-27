import type { VueConstructor } from 'vue'
import IndexBar from './IndexBar.vue'

IndexBar.install = function (app: VueConstructor) {
  app.component(IndexBar.name, IndexBar)
}

export const _IndexBarComponent = IndexBar

export default IndexBar
