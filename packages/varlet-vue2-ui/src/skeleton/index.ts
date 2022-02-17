import type { VueConstructor } from 'vue'
import Skeleton from './Skeleton.vue'

Skeleton.install = function (app: VueConstructor) {
  app.component(Skeleton.name, Skeleton)
}

export const _SkeletonComponent = Skeleton

export default Skeleton
