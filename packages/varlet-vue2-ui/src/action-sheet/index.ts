import VarActionSheet from './ActionSheet.vue'
import Vue, { VueConstructor, ComponentOptions } from 'vue'
import { inBrowser, isNumber, isString } from '../utils/shared'
import { mountComponent } from '../utils/components'

export type ActionSheetActions = ActionItem | 'close'

export interface ActionItem {
  name: string
  color?: string
  icon?: string
  iconSize?: string | number
  className?: string
  disabled?: boolean
}

interface ActionSheetOptions {
  actions?: ActionItem[]
  show?: boolean
  title?: string
  message?: string
  overlay?: boolean
  overlayClass?: string
  overlayStyle?: Record<string, any>
  lockScroll?: boolean
  closeOnClickAction?: boolean
  closeOnClickOverlay?: boolean
  onOpen?: () => void
  onOpened?: () => void
  onClose?: () => void
  onClosed?: () => void
  onClickOverlay?: () => void
  onSelect?: (action: ActionItem) => void
}

let singletonInstance: ActionSheetOptions | null

function ActionSheet(options: ActionSheetOptions): Promise<ActionSheetActions | void> {
  if (!inBrowser()) {
    return Promise.resolve()
  }

  return new Promise((resolve) => {
    ActionSheet.close()

    const actionSheetOptions: ActionSheetOptions =
      isString(options) || isNumber(options) ? { message: String(options) } : options

    const { instance, unmount } = mountComponent(VarActionSheet as ComponentOptions<Vue>, 'body', {
      propsData: {
        ...actionSheetOptions,
      },
    })

    instance.show = true

    singletonInstance = instance

    instance.$on('select', (action: ActionItem) => {
      actionSheetOptions.onSelect?.(action)
      resolve(action)
    })

    instance.$on('open', () => {
      actionSheetOptions.onOpen?.()
    })
    instance.$on('opened', () => {
      actionSheetOptions.onOpened?.()
    })

    instance.$on('close', () => {
      actionSheetOptions.onClose?.()
      resolve('close')
    })

    instance.$on('closed', () => {
      actionSheetOptions.onClosed?.()
      unmount()
      singletonInstance === actionSheetOptions && (singletonInstance = null)
    })

    instance.$on('route-change', () => {
      unmount()
      singletonInstance === actionSheetOptions && (singletonInstance = null)
    })

    instance.$on('update:show', (value: boolean) => {
      instance.show = value
    })

    instance.show = true
  })
}

ActionSheet.Component = VarActionSheet

VarActionSheet.install = function (app: VueConstructor) {
  app.component(VarActionSheet.name, VarActionSheet)
}

ActionSheet.close = () => {
  if (singletonInstance != null) {
    const prevSingletonOptions = singletonInstance
    singletonInstance = null

    Vue.nextTick().then(() => {
      prevSingletonOptions.show = false
    })
  }
}

ActionSheet.install = function (app: VueConstructor) {
  app.component(VarActionSheet.name, VarActionSheet)
}

export const _ActionSheetComponent = VarActionSheet

export default ActionSheet
