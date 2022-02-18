declare module 'vue' {
  export interface GlobalComponents {
    VarButton: typeof import('@varlet-vue2/ui')['_ButtonComponent']
    VarLocale: typeof import('@varlet-vue2/ui')['_LocaleComponent']
    VarSkeleton: typeof import('@varlet-vue2/ui')['_SkeletonComponent']
    VarChip: typeof import('@varlet-vue2/ui')['_ChipComponent']
  }
}

export {}
