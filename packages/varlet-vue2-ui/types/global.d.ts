declare module 'vue' {
  export interface GlobalComponents {
    VarButton: typeof import('@varlet-vue2/ui')['_ButtonComponent']
    VarCell: typeof import('@varlet-vue2/ui')['_CellComponent']
    VarLocale: typeof import('@varlet-vue2/ui')['_LocaleComponent']
    VarProgress: typeof import('@varlet-vue2/ui')['_ProgressComponent']
    VarSkeleton: typeof import('@varlet-vue2/ui')['_SkeletonComponent']
  }
}

export {}
