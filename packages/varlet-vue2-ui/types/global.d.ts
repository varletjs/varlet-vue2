declare module 'vue' {
  export interface GlobalComponents {
    VarButton: typeof import('@varlet-vue2/ui')['_ButtonComponent']
  }
}

export {}
