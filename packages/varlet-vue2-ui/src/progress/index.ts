import { VueConstructor } from 'vue'
import Progress from './Progress.vue'

Progress.install = function (app: VueConstructor) {
  app.component(Progress.name, Progress)
}

export const _ProgressComponent = Progress

export default Progress
