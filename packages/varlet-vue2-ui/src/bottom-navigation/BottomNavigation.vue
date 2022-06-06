<template>
  <div
    class="var-bottom-navigation"
    :class="[fixed ? 'var-bottom-navigation--fixed' : null, border ? 'var-bottom-navigation--border' : null]"
    ref="bottomNavigationDom"
    :style="`z-index:${zIndex}`"
  >
    <slot></slot>

    <var-button
      v-if="$slots.fab"
      class="var-bottom-navigation__fab"
      :class="
        bottomNavigationItems.length % 2 ? 'var-bottom-navigation--fab-right' : 'var-bottom-navigation--fab-center'
      "
      @click="handleFabClick"
      v-bind="_fabProps"
      round
    >
      <slot name="fab"></slot>
    </var-button>
  </div>
</template>

<script>
import VarButton from '../button'
import { defineComponent } from '../utils/create'
import { props } from './props'
import { isNumber } from '../utils/shared'
import { createParentMixin } from '../utils/mixins/relation'
import { doubleRaf } from '../utils/elements'

const RIGHT_HALF_SPACE_CLASS = 'var-bottom-navigation-item--right-half-space'
const LEFT_HALF_SPACE_CLASS = 'var-bottom-navigation-item--left-half-space'
const RIGHT_SPACE_CLASS = 'var-bottom-navigation-item--right-space'
const defaultFabProps = {
  type: 'primary',
}

export default defineComponent({
  name: 'VarBottomNavigation',
  components: { VarButton },

  mixins: [createParentMixin('bottomNavigation', { childrenKey: 'bottomNavigationItems' })],

  inheritAttrs: false,

  props,

  data: () => ({
    _fabProps: {},
  }),

  watch: {
    async bottomNavigationItems() {
      await doubleRaf()

      this.matchBoundary()
      this.removeMarginClass()

      if (!this.$slots.fab) {
        return
      }
      this.addMarginClass()
    },
    fabProps: {
      handler(newValue) {
        this._fabProps = { ...defaultFabProps, ...newValue }
      },
      immediate: true,
      deep: true,
    },
  },

  methods: {
    matchBoundary() {
      if (this.bottomNavigationItems.length === 0 || this.matchName() || this.matchIndex()) {
        return
      }

      this.handleActiveIndex()
    },
    matchName() {
      return this.bottomNavigationItems.find(({ name }) => {
        return this.active === name
      })
    },
    matchIndex() {
      return this.bottomNavigationItems.find(({ index }) => {
        return this.active === index
      })
    },
    handleActiveIndex() {
      if (!isNumber(this.active)) {
        return
      }

      const { getListeners } = this

      if (this.active < 0) {
        getListeners()['onUpdate:active']?.(0)
        this.itemsSetCurrent(0)
      } else if (this.active > this.bottomNavigationItems.length - 1) {
        getListeners()['onUpdate:active']?.(this.bottomNavigationItems.length - 1)
        this.itemsSetCurrent(this.bottomNavigationItems.length - 1)
      }
    },
    itemsSetCurrent(value) {
      this.bottomNavigationItems.forEach((item) => {
        item.setCurrent(value)
      })
    },
    onToggle(changedValue) {
      if (changedValue === this.active) {
        return
      }
      const { getListeners } = this

      getListeners().onBeforeChange ? this.handleBeforeChange(changedValue) : this.handleChange(changedValue)
    },
    handleBeforeChange(changedValue) {
      const { getListeners } = this
      Promise.resolve(getListeners().onBeforeChange?.(changedValue)).then(
        (res) => res && this.handleChange(changedValue)
      )
    },
    handleChange(changedValue) {
      const { getListeners } = this

      getListeners()['onUpdate:active']?.(changedValue)

      this.itemsSetCurrent(changedValue)

      getListeners().onChange?.(changedValue)
    },
    getBottomNavigationItems() {
      return Array.from(this.$refs.bottomNavigationDom.querySelectorAll('.var-bottom-navigation-item'))
    },
    removeMarginClass() {
      this.getBottomNavigationItems().forEach((dom) => {
        dom.classList.remove(RIGHT_HALF_SPACE_CLASS, LEFT_HALF_SPACE_CLASS, RIGHT_SPACE_CLASS)
      })
    },
    addMarginClass() {
      const isEven = this.bottomNavigationItems.length % 2 === 0

      this.getBottomNavigationItems().forEach((bottomNavigationItem, i) => {
        this.handleMarginClass(isEven, bottomNavigationItem, i, this.bottomNavigationItems.length)
      })
    },
    handleMarginClass(isEven, dom, i, length) {
      const isLast = i === length - 1
      if (!isEven && isLast) {
        dom.classList.add(RIGHT_SPACE_CLASS)
        return
      }

      const isFabLeft = i === length / 2 - 1
      const isFabRight = i === length / 2
      if (isFabLeft) {
        dom.classList.add(RIGHT_HALF_SPACE_CLASS)
      } else if (isFabRight) {
        dom.classList.add(LEFT_HALF_SPACE_CLASS)
      }
    },
    handleFabClick() {
      const { getListeners } = this
      getListeners().onFabClick?.()
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../button/button';
@import './bottomNavigation';
</style>
