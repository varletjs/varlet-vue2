import type { VueConstructor } from 'vue'
import Uploader from './Uploader.vue'

Uploader.install = function (app: VueConstructor) {
  app.component(Uploader.name, Uploader)
}

export const _UploaderComponent = Uploader

export default Uploader
