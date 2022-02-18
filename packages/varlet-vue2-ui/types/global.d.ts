declare module 'vue' {
  export interface GlobalComponents {
    VarButton: typeof import('@varlet-vue2/ui')['_ButtonComponent']
    VarCell: typeof import('@varlet-vue2/ui')['_CellComponent']
    VarCard: typeof import('@varlet-vue2/ui')['_CardComponent']
    VarLocale: typeof import('@varlet-vue2/ui')['_LocaleComponent']
    VarSkeleton: typeof import('@varlet-vue2/ui')['_SkeletonComponent']
  }
}

export {}
