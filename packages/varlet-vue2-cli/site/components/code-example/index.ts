import type { VueConstructor } from 'vue'
import CodeExample from './CodeExample.vue'

CodeExample.install = function (app: VueConstructor) {
  app.component(CodeExample.name, CodeExample)
}

export const _CodeExampleComponent = CodeExample

export default CodeExample
