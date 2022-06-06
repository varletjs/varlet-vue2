<template>
  <button
    class="var-bottom-navigation-item"
    ref="bottomNavigationItem"
    v-ripple
    :style="{
      color: computeColorStyle(),
    }"
    @click="handleClick"
  >
    <var-icon
      v-if="icon && !$slots.icon"
      :name="icon"
      :namespace="namespace"
      class="var-bottom-navigation-item__icon"
    />
    <slot name="icon" :active="isActive"></slot>
    <var-badge v-if="badge" v-bind="badgeProps" class="var-bottom-navigation-item__badge" />
    <span class="var-bottom-navigation-item__label">
      <template v-if="!$slots.default">
        {{ label }}
      </template>
      <slot></slot>
    </span>
  </button>
</template>

<script>
import Ripple from '../ripple'
import VarBadge from '../badge'
import VarIcon from '../icon'
import { defineComponent } from '../utils/create'
import { props } from './props'
import { createChildrenMixin } from '../utils/mixins/relation'

const defaultBadgeProps = {
  type: 'danger',
  dot: true,
}

export default defineComponent({
  name: 'VarBottomNavigationItem',
  components: {
    VarBadge,
    VarIcon,
  },
  directives: { Ripple },

  mixins: [
    createChildrenMixin('bottomNavigation', { parentKey: 'bottomNavigation', childrenKey: 'bottomNavigationItems' }),
  ],

  inheritAttrs: false,
  props,

  data: () => ({
    isActive: false,
    badgeProps: {},
  }),

  mounted() {
    this.isActive = this.name === this.bottomNavigation.active || this.index === this.bottomNavigation.active

    if (this.isActive) {
      this.$refs.bottomNavigationItem.classList.add('var-bottom-navigation-item--active')
    }
  },

  watch: {
    badge: {
      handler(newValue) {
        this.badgeProps = newValue === true ? defaultBadgeProps : this.badge
      },
      immediate: true,
    },
  },

  methods: {
    computeColorStyle() {
      const { activeColor, inactiveColor } = this.bottomNavigation

      return this.isActive ? activeColor : inactiveColor
    },
    setCurrent(value) {
      const _isActive = value === this.index || value === this.name

      if (_isActive === this.isActive) {
        return
      }

      this.isActive = _isActive

      if (this.isActive) {
        this.$refs.bottomNavigationItem.classList.add('var-bottom-navigation-item--active')
      } else {
        this.$refs.bottomNavigationItem.classList.remove('var-bottom-navigation-item--active')
      }
    },
    handleClick() {
      const { name, getListeners, index } = this
      const active = name ?? index

      getListeners().onClick?.(active)
      this.bottomNavigation.onToggle(active)
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../ripple/ripple';
@import '../badge/badge';
@import '../icon/icon';
@import './bottomNavigationItem';
</style>
