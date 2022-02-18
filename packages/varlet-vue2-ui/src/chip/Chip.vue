<template>
  <transition name="var-fade">
    <span class="var-chip var--box" :class="contentClass" :style="chipStyles" v-bind="$attrs">
      <slot name="left" />

      <span :class="[`var-chip--text-${size}`]">
        <slot />
      </span>

      <slot name="right" />

      <span v-if="closable" class="var-chip--close" @click="onClose">
        <var-icon :name="`${iconName ? iconName : 'close-circle'}`" />
      </span>
    </span>
  </transition>
</template>

<script>
import VarIcon from '../icon'
// import { defineComponent, computed } from 'vue'
import { defineComponent } from '../utils/create'
import { props } from './props'

// import type { ComputedRef } from 'vue'

export default defineComponent({
  name: 'VarChip',
  components: {
    VarIcon,
  },
  inheritAttrs: false,
  props,
  computed: {
    chipStyles() {
      const { plain, textColor, color } = this
      if (plain) {
        return {
          color: textColor || color,
          borderColor: color,
        }
      }
      return {
        color: textColor,
        background: color,
      }
    },
    contentClass() {
      const { size, block, type, plain, round } = this
      const blockClass = block ? 'var--flex' : 'var--inline-flex'
      const plainTypeClass = plain ? `var-chip--plain var-chip--plain-${type}` : `var-chip--${type}`
      const roundClass = round && 'var-chip--round'
      return [`var-chip--${size}`, blockClass, plainTypeClass, roundClass]
    },
  },
  methods: {
    onClose(e) {
      const { onClose } = this.getListeners()
      if (!onClose) {
        return
      }
      onClose(e)
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../icon/icon';
@import './chip';
</style>
