import type { VueConstructor } from 'vue'
import Image from './Image.vue'

Image.install = function (app: VueConstructor) {
  app.component(Image.name, Image)
}

export const _ImageComponent = Image

export default Image
