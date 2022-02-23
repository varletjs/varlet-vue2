import Vue, { ComponentOptions } from 'vue'
import { CombinedVueInstance } from 'vue/types/vue'

export function pickProps<T, U extends keyof T>(props: T, propsKey: U): T[U]
export function pickProps<T, U extends keyof T>(props: T, propsKey: U[]): Pick<T, U>
export function pickProps(props: any, propsKey: any): any {
  return Array.isArray(propsKey)
    ? propsKey.reduce((pickedProps: any, key) => {
        pickedProps[key] = props[key]
        return pickedProps
      }, {})
    : props[propsKey]
}

export interface MountComponentApi {
  instance: CombinedVueInstance<any, any, any, any, any>
  unmount(): void
}

export function mountComponent(component: ComponentOptions<Vue>, container = 'body', options = {}): MountComponentApi {
  const instance = new (Vue.extend(component))(options)
  const el = instance.$mount().$el
  const wrapper = document.querySelector(container)!
  wrapper.appendChild(el)

  return {
    instance,
    unmount() {
      instance.$destroy()
      wrapper.removeChild(el)
    },
  }
}

export function addRouteListener(vm: any, cb: () => void) {
  vm.$on('hook:mounted', () => {
    window.addEventListener('hashchange', cb)
    window.addEventListener('popstate', cb)
  })

  vm.$on('hook:beforeDestroy', () => {
    window.removeEventListener('hashchange', cb)
    window.removeEventListener('popstate', cb)
  })
}
