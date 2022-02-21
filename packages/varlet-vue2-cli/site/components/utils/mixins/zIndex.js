import context from '../../context'

export function createZIndexMixin(state, count = 1) {
  return {
    data: () => ({
      zIndex: context.zIndex,
    }),

    watch: {
      [state]: {
        handler(newValue) {
          if (newValue) {
            context.zIndex += count
            this.zIndex = context.zIndex
          }
        },
        immediate: true,
      },
    },
  }
}
