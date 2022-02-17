import Vue, { ComponentOptions, RenderContext, VueConstructor } from 'vue'
import { SlotsMixin } from './mixins/slots'
import { ListenersMixin } from './mixins/listeners'

export type ComponentOptionsPlugin = ComponentOptions<Vue> & { install?: (app: VueConstructor) => void }

export function nextTick() {
  return new Promise(Vue.nextTick)
}

export function mergeSlots(context: RenderContext) {
  const scopedSlots = context.scopedSlots ?? context.data.scopedSlots ?? {}
  const slots = context.slots()

  Object.keys(slots).forEach((key) => {
    if (!scopedSlots[key]) {
      scopedSlots[key] = () => slots[key]
    }
  })

  return scopedSlots
}

export function defineComponent(sfc: ComponentOptionsPlugin & { name: string }) {
  if (sfc.mixins) {
    sfc.mixins.push(SlotsMixin)
    sfc.mixins.push(ListenersMixin)
  } else {
    sfc.mixins = [SlotsMixin, ListenersMixin]
  }

  return sfc
}
