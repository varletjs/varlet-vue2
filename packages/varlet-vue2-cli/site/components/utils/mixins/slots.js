export const SlotsMixin = {
  methods: {
    slots(name = 'default', props) {
      const { $slots, $scopedSlots } = this
      const scopedSlot = $scopedSlots[name]

      return scopedSlot ? scopedSlot(props) : $slots[name]
    },

    hasSlots(name = 'default') {
      return this.$scopedSlots[name] || this.$slots[name]
    },
  },
}
