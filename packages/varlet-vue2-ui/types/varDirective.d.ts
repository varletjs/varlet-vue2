import type { VueConstructor } from 'vue'
import { DirectiveBinding } from '@vue/runtime-core'

export class VarDirective {
  static install(app: VueConstructor): void

  static mounted(el: HTMLElement, binding: DirectiveBinding): void

  static updated(el: HTMLElement, binding: DirectiveBinding): void

  static unmounted(el: HTMLElement, binding: DirectiveBinding): void
}
