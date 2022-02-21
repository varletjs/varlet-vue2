<template>
  <div class="var-badge var--box">
    <transition name="var-badge-fade">
      <span
        v-bind="$attrs"
        v-show="!hidden"
        class="var-badge__content"
        :class="contentClass"
        :style="{ background: color }"
      >
        <var-icon v-if="icon && !dot" :name="icon" size="10px" />
        <span v-else>{{ values }}</span>
      </span>
    </transition>
    <slot />
  </div>
</template>

<script>
import VarIcon from '../icon'
import { defineComponent } from '../utils/create'
import { props } from './props'
import { toNumber } from '../utils/shared'

export default defineComponent({
  name: 'VarBadge',

  components: { VarIcon },

  inheritAttrs: false,

  props,

  computed: {
    contentClass() {
      const { type, position, dot, icon } = this
      const positionBasic = this.hasSlots() && `var-badge__position var-badge--${position}`
      const dotClass = dot && 'var-badge__dot'
      const positionClass = this.getPositionClass()
      const iconClass = icon && 'var-badge__icon'

      return [`var-badge--${type}`, positionBasic, dotClass, positionClass, iconClass]
    },

    values() {
      const { dot, value, maxValue } = this

      if (dot) return ''

      if (value !== undefined && maxValue !== undefined && toNumber(value) > maxValue) return `${maxValue}+`

      return value
    },
  },

  methods: {
    getPositionClass() {
      const { position, dot } = this

      if (dot && position.includes('right')) return 'var-badge__dot--right'

      if (dot && position.includes('left')) return 'var-badge__dot--left'
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../icon/icon';
@import './badge';
</style>
