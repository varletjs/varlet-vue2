import type { VueConstructor } from 'vue'
import IndexAnchor from './IndexAnchor.vue'

IndexAnchor.install = function (app: VueConstructor) {
  app.component(IndexAnchor.name, IndexAnchor)
}

export const _IndexAnchorComponent = IndexAnchor

export default IndexAnchor
