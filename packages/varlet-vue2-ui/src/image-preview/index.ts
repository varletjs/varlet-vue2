import VarImagePreview from './ImagePreview.vue'
import Vue, { VueConstructor, ComponentOptions } from 'vue'
import { inBrowser, isArray, isString } from '../utils/shared'
import { mountComponent } from '../utils/components'

interface ImagePreviewOptions {
  show?: boolean
  current?: string
  images?: string[]
  zoom?: string | number
  lockScroll?: boolean
  indicator?: boolean
  closeable?: boolean
  onOpen?: () => void
  onOpened?: () => void
  onClose?: () => void
  onClosed?: () => void
  onChange?: (index: number) => void
}

let singletonInstance: ImagePreviewOptions | null

function ImagePreview(options: string | string[] | ImagePreviewOptions) {
  if (!inBrowser()) {
    return
  }

  ImagePreview.close()

  const imagePreviewOptions: ImagePreviewOptions = isString(options)
    ? { images: [options] }
    : isArray(options)
    ? { images: options }
    : options

  const { instance, unmount } = mountComponent(VarImagePreview as ComponentOptions<Vue>, 'body', {
    propsData: {
      ...imagePreviewOptions,
    },
  })

  instance.show = true

  singletonInstance = instance

  instance.$on('open', () => imagePreviewOptions.onOpen?.())

  instance.$on('opened', () => imagePreviewOptions.onOpened?.())

  instance.$on('close', () => imagePreviewOptions.onClose?.())

  instance.$on('closed', () => {
    imagePreviewOptions.onClosed?.()
    unmount()
    singletonInstance === imagePreviewOptions && (singletonInstance = null)
  })

  instance.$on('change', (index: number) => {
    imagePreviewOptions.onChange?.(index)
  })

  instance.$on('route-change', () => {
    unmount()
    singletonInstance === instance && (singletonInstance = null)
  })

  instance.$on('update:show', (value: boolean) => {
    instance.show = value
  })

  instance.show = true
}

ImagePreview.close = () => {
  if (singletonInstance != null) {
    const prevSingletonInstance = singletonInstance
    singletonInstance = null

    Vue.nextTick(() => {
      prevSingletonInstance.show = false
    })
  }
}

VarImagePreview.install = function (app: VueConstructor) {
  app.component(VarImagePreview.name, VarImagePreview)
}

ImagePreview.install = function (app: VueConstructor) {
  app.component(VarImagePreview.name, VarImagePreview)
}

ImagePreview.Component = VarImagePreview

export const _ImagePreviewComponent = VarImagePreview

export default ImagePreview
