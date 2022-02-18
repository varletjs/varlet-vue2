declare module 'vue' {
  export interface GlobalComponents {
    VarAppBar: typeof import('@varlet-vue2/ui')['_AppBarComponent']
    VarBadge: typeof import('@varlet-vue2/ui')['_BadgeComponent']
    VarButton: typeof import('@varlet-vue2/ui')['_ButtonComponent']
    VarCard: typeof import('@varlet-vue2/ui')['_CardComponent']
    VarCell: typeof import('@varlet-vue2/ui')['_CellComponent']
    VarChip: typeof import('@varlet-vue2/ui')['_ChipComponent']
    VarCountdown: typeof import('@varlet-vue2/ui')['_CountdownComponent']
    VarDivider: typeof import('@varlet-vue2/ui')['_DividerComponent']
    VarForm: typeof import('@varlet-vue2/ui')['_FormComponent']
    VarImage: typeof import('@varlet-vue2/ui')['_ImageComponent']
    VarLazy: typeof import('@varlet-vue2/ui')['_LazyComponent']
    VarLocale: typeof import('@varlet-vue2/ui')['_LocaleComponent']
    VarProgress: typeof import('@varlet-vue2/ui')['_ProgressComponent']
    VarRadio: typeof import('@varlet-vue2/ui')['_RadioComponent']
    VarRadioGroup: typeof import('@varlet-vue2/ui')['_RadioGroupComponent']
    VarSkeleton: typeof import('@varlet-vue2/ui')['_SkeletonComponent']
    VarSnackbar: typeof import('@varlet-vue2/ui')['_SnackbarComponent']
  }
}

export {}
