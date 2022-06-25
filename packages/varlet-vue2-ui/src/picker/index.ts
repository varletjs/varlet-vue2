import VarPicker from './Picker.vue'
import Vue, { VueConstructor, ComponentOptions } from 'vue'
import type { Component } from 'vue'
import { NormalColumn, CascadeColumn } from './props'
import { isArray } from '../utils/shared'
import { mountComponent } from '../utils/components'

export type Texts = any[]

interface PickerOptions {
  columns: NormalColumn | CascadeColumn | Texts
  show?: boolean
  title?: string
  textKey?: string
  toolbar?: boolean
  cascade?: boolean
  optionHeight?: number | string
  optionCount?: number | string
  confirmButtonText?: string
  cancelButtonText?: string
  confirmButtonTextColor?: string
  cancelButtonTextColor?: string
  teleport?: 'to'
  dynamic?: boolean
  textFormatter?: (text: any, columnIndex: number) => any
  onOpen?: () => void
  onOpened?: () => void
  onClose?: () => void
  onClosed?: () => void
  onChange?: (texts: Texts, indexes: number[]) => void
  onConfirm?: (texts: Texts, indexes: number[]) => void
  onCancel?: (texts: Texts, indexes: number[]) => void
}

type PickerResolvedState = 'confirm' | 'cancel' | 'close'

interface PickerResolvedData {
  state: PickerResolvedState
  texts?: Texts
  indexes?: number[]
}

let singletonInstance: PickerOptions | null

function Picker(options: PickerOptions | Texts): Promise<PickerResolvedData> {
  return new Promise((resolve) => {
    Picker.close()

    const pickerOptions: PickerOptions = isArray(options) ? { columns: options } : options

    const { instance, unmount } = mountComponent(VarPicker as ComponentOptions<Vue>, 'body', {
      propsData: {
        ...pickerOptions,
        dynamic: true,
      },
    })

    instance.show = true

    singletonInstance = instance

    instance.$on('open', () => pickerOptions.onOpen?.())

    instance.$on('opened', () => pickerOptions.onOpened?.())

    instance.$on('close', () => {
      pickerOptions.onClose?.()
      resolve({
        state: 'close',
      })
      singletonInstance === instance && (singletonInstance = null)
    })

    instance.$on('closed', () => {
      pickerOptions.onClosed?.()
      unmount()
      singletonInstance === instance && (singletonInstance = null)
    })

    instance.$on('change', (texts: Texts, indexes: number[]) => {
      pickerOptions.onChange?.(texts, indexes)

      singletonInstance === instance && (singletonInstance = null)
    })

    instance.$on('confirm', (texts: Texts, indexes: number[]) => {
      pickerOptions.onConfirm?.(texts, indexes)
      resolve({
        state: 'confirm',
        texts,
        indexes,
      })
      instance.show = false
      singletonInstance === instance && (singletonInstance = null)
    })

    instance.$on('cancel', (texts: Texts, indexes: number[]) => {
      pickerOptions.onCancel?.(texts, indexes)
      resolve({
        state: 'cancel',
        texts,
        indexes,
      })
      instance.show = false
      singletonInstance === instance && (singletonInstance = null)
    })

    instance.$on('route-change', () => {
      unmount()
      singletonInstance === instance && (singletonInstance = null)
    })

    instance.$on('update:show', (value: boolean) => {
      instance.show = value
    })

    instance.show = true
  })
}

VarPicker.install = function (app: VueConstructor) {
  app.component(VarPicker.name, VarPicker)
}

Picker.Component = VarPicker as Component

Picker.install = function (app: VueConstructor) {
  app.component(VarPicker.name, VarPicker)
}

Picker.close = () => {
  if (singletonInstance != null) {
    const prevSingletonInstance = singletonInstance
    singletonInstance = null

    Vue.nextTick().then(() => {
      prevSingletonInstance.show = false
    })
  }
}

export const _PickerComponent = VarPicker

export default Picker
