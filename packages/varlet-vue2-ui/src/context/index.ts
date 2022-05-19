import Vue from 'vue'

interface Context {
  locks: Record<any, number>
  zIndex: number
  touchmoveForbid: boolean
}

const context: Context = {
  locks: {},
  zIndex: 2000,
  touchmoveForbid: true,
}

const reactiveContext = Vue.observable(context)

export const _ContextComponent = reactiveContext

export default reactiveContext
