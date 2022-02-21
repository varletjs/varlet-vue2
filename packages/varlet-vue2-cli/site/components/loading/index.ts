import type { VueConstructor } from 'vue'
import Loading from './Loading.vue'

Loading.install = function (app: VueConstructor) {
  app.component(Loading.name, Loading)
}

export const _LoadingComponent = Loading

export default Loading
