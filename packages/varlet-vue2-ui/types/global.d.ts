declare module 'vue' {
  export interface GlobalComponents {
    VarBadge: typeof import('@varlet-vue2/ui')['_BadgeComponent']
    VarButton: typeof import('@varlet-vue2/ui')['_ButtonComponent']
    VarCard: typeof import('@varlet-vue2/ui')['_CardComponent']
    VarCell: typeof import('@varlet-vue2/ui')['_CellComponent']
    VarChip: typeof import('@varlet-vue2/ui')['_ChipComponent']
    VarDivider: typeof import('@varlet-vue2/ui')['_DividerComponent']
    VarImage: typeof import('@varlet-vue2/ui')['_ImageComponent']
    VarLazy: typeof import('@varlet-vue2/ui')['_LazyComponent']
    VarLocale: typeof import('@varlet-vue2/ui')['_LocaleComponent']
    VarProgress: typeof import('@varlet-vue2/ui')['_ProgressComponent']
    VarSkeleton: typeof import('@varlet-vue2/ui')['_SkeletonComponent']
    VarSnackbar: typeof import('@varlet-vue2/ui')['_SnackbarComponent']
  }
}

export {}
