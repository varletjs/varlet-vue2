import Vue from 'vue'
import VarSnackbarCore from './core.vue'
import VarSnackbar from './Snackbar.vue'
import context from '../context'
import { mountComponent } from '../utils/components'
import { isNumber, isPlainObject, isString, toNumber } from '../utils/shared'

export const SNACKBAR_TYPE = ['loading', 'success', 'warning', 'info', 'error']

let sid = 0
let isMount = false
let unmount
let isAllowMultiple = false
let uniqSnackbarOptions = Vue.observable({
  value: [],
})

const defaultOption = {
  type: undefined,
  content: '',
  position: 'top',
  duration: 3000,
  vertical: false,
  contentClass: undefined,
  loadingType: 'circle',
  loadingSize: 'normal',
  lockScroll: false,
  teleport: 'body',
  forbidClick: false,
  onOpen: () => {},
  onOpened: () => {},
  onClose: () => {},
  onClosed: () => {},
}

const transitionGroupProps = {
  name: 'var-snackbar-fade',
  tag: 'div',
  class: 'var-transition-group',
}

function getCoreVNode(h, option) {
  const { id, reactiveSnackOptions, customUpdate } = option
  const attrs = {
    ...reactiveSnackOptions,
    'data-id': id,
    customUpdate,
  }
  const directives = [
    {
      name: 'show',
      rawName: 'v-show',
      value: reactiveSnackOptions.show,
      expression: 'show',
    },
  ]
  const style = {
    position: isAllowMultiple ? 'relative' : 'absolute',
    top: getTop(reactiveSnackOptions.position),
  }
  const on = {
    'update:show': (value) => {
      reactiveSnackOptions.show = value
    },
    open: () => {
      reactiveSnackOptions?.onOpen()
    },
    close: () => {
      reactiveSnackOptions?.onClose()
    },
  }
  return h(VarSnackbarCore, {
    key: id,
    attrs,
    style,
    directives,
    on,
  })
}

const TransitionGroupHost = {
  render(h) {
    const snackbarList = uniqSnackbarOptions.value.map(({ id, reactiveSnackOptions, customUpdate }) => {
      const transitionGroupEl = document.querySelector('.var-transition-group')
      if (reactiveSnackOptions.forbidClick || reactiveSnackOptions.type === 'loading') {
        transitionGroupEl.classList.add('var-pointer-auto')
      } else {
        transitionGroupEl.classList.remove('var-pointer-auto')
      }

      if (isAllowMultiple) reactiveSnackOptions.position = 'top'

      return getCoreVNode(h, { id, reactiveSnackOptions, customUpdate })
    })

    return h(
      'transition-group',
      {
        attrs: {
          ...transitionGroupProps,
        },
        style: {
          zIndex: context.zIndex,
        },
        on: {
          'after-enter': opened,
          'after-leave': removeUniqOption,
        },
      },
      snackbarList
    )
  },
}

const Snackbar = function (options) {
  const snackOptions = isString(options) || isNumber(options) ? { content: String(options) } : options
  const reactiveSnackOptions = Vue.observable({
    ...defaultOption,
    ...snackOptions,
  })
  Vue.set(reactiveSnackOptions, 'show', true)

  if (!isMount) {
    isMount = true
    unmount = mountComponent(TransitionGroupHost).unmount
  }

  const { length } = uniqSnackbarOptions.value
  const uniqSnackbarOptionItem = {
    id: sid++,
    reactiveSnackOptions,
  }

  if (length === 0 || isAllowMultiple) {
    addUniqOption(uniqSnackbarOptionItem)
  } else {
    const customUpdate = `update-${sid}`
    updateUniqOption(reactiveSnackOptions, customUpdate)
  }

  return {
    clear() {
      if (!isAllowMultiple && uniqSnackbarOptions.value.length) {
        uniqSnackbarOptions.value[0].reactiveSnackOptions.show = false
      } else {
        reactiveSnackOptions.show = false
      }
    },
  }
}

SNACKBAR_TYPE.forEach((type) => {
  Snackbar[type] = (options) => {
    if (isPlainObject(options)) {
      options.type = type
    } else {
      options = {
        content: options,
        type,
      }
    }
    return Snackbar(options)
  }
})

Snackbar.install = function (app) {
  app.component(VarSnackbar.name, VarSnackbar)
}

Snackbar.allowMultiple = function (bool = false) {
  if (bool !== isAllowMultiple) {
    uniqSnackbarOptions.value.forEach((option) => {
      option.reactiveSnackOptions.show = false
    })

    isAllowMultiple = bool
  }
}

Snackbar.clear = function () {
  uniqSnackbarOptions.value.forEach((option) => {
    option.reactiveSnackOptions.show = false
  })
}

Snackbar.Component = VarSnackbar

function opened(element) {
  const id = element.getAttribute('data-id')
  const option = uniqSnackbarOptions.value.find((option) => option.id === toNumber(id))
  if (option) option.reactiveSnackOptions.onOpened?.()
}

function removeUniqOption(element) {
  element.parentElement && element.parentElement.classList.remove('var-pointer-auto')
  const id = element.getAttribute('data-id')

  const option = uniqSnackbarOptions.value.find((option) => option.id === toNumber(id))
  if (option) {
    option.animationEnd = true
    option.reactiveSnackOptions.onClosed?.()
  }

  const isAllAnimationEnd = uniqSnackbarOptions.value.every((option) => option.animationEnd)

  if (isAllAnimationEnd) {
    unmount?.()
    uniqSnackbarOptions = Vue.observable({
      value: [],
    })
    isMount = false
  }
}

function addUniqOption(uniqSnackbarOptionItem) {
  uniqSnackbarOptions.value.push(uniqSnackbarOptionItem)
}

function updateUniqOption(reactiveSnackOptions, customUpdate) {
  const [firstOption] = uniqSnackbarOptions.value

  firstOption.reactiveSnackOptions = {
    ...firstOption.reactiveSnackOptions,
    ...reactiveSnackOptions,
  }

  firstOption.customUpdate = customUpdate
}

function getTop(position = 'top') {
  if (position === 'center') return '45%'
  if (position === 'bottom') return '85%'
  return '50px'
}

VarSnackbar.install = function (app) {
  app.component(VarSnackbar.name, VarSnackbar)
}

export const _SnackbarComponent = VarSnackbar

export default Snackbar
