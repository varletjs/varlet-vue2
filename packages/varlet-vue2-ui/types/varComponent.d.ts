import type { VueConstructor } from 'vue'

export class VarComponent {
  static name: string

  static install(app: VueConstructor): void
}
