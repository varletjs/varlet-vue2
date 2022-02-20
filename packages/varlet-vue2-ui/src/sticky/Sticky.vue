<template>
  <div
    class="var-sticky"
    ref="stickyEl"
    :class="[enableCSSMode ? 'var-sticky--css-mode' : null]"
    :style="{
      zIndex: toNumber(zIndex),
      top: enableCSSMode ? `${localOffsetTop}px` : undefined,
      width: enableFixedMode ? fixedWidth : undefined,
      height: enableFixedMode ? fixedHeight : undefined,
    }"
  >
    <div
      class="var-sticky__wrapper"
      ref="wrapperEl"
      :style="{
        zIndex: toNumber(zIndex),
        position: enableFixedMode ? 'fixed' : undefined,
        width: enableFixedMode ? fixedWrapperWidth : undefined,
        height: enableFixedMode ? fixedWrapperHeight : undefined,
        left: enableFixedMode ? fixedLeft : undefined,
        top: enableFixedMode ? fixedTop : undefined,
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import { props } from './props'
import { doubleRaf, getParentScroller, toPxNum } from '../utils/elements'
import { toNumber } from '../utils/shared'
import { defineComponent } from '../utils/create'

export default defineComponent({
  name: 'VarSticky',

  props,

  data: () => ({
    isFixed: false,
    fixedTop: '0px',
    fixedLeft: '0px',
    fixedWidth: 'auto',
    fixedHeight: 'auto',
    fixedWrapperWidth: 'auto',
    fixedWrapperHeight: 'auto',
    scroller: undefined,
  }),

  computed: {
    enableCSSMode() {
      return !this.disabled && this.cssMode
    },
    enableFixedMode() {
      return !this.disabled && this.isFixed
    },
    localOffsetTop() {
      return toPxNum(this.offsetTop)
    },
  },

  activated() {
    this.addScrollListener()
  },

  deactivated() {
    this.removeScrollListener()
  },

  mounted() {
    this.addScrollListener()
  },

  beforeDestroy() {
    this.removeScrollListener()
  },

  watch: {
    disabled() {
      this.handleScroll()
    },
  },

  methods: {
    toNumber,

    handleScroll() {
      const { onScroll, cssMode, disabled } = this

      if (disabled) {
        return
      }

      let scrollerTop = 0

      if (this.scroller !== window) {
        const { top } = this.scroller.getBoundingClientRect()
        scrollerTop = top
      }

      const wrapper = this.$refs.wrapperEl
      const sticky = this.$refs.stickyEl
      const { top: stickyTop, left: stickyLeft } = sticky.getBoundingClientRect()
      const currentOffsetTop = stickyTop - scrollerTop

      if (currentOffsetTop <= this.localOffsetTop) {
        if (!cssMode) {
          this.fixedWidth = `${sticky.offsetWidth}px`
          this.fixedHeight = `${sticky.offsetHeight}px`
          this.fixedTop = `${scrollerTop + this.localOffsetTop}px`
          this.fixedLeft = `${stickyLeft}px`
          this.fixedWrapperWidth = `${wrapper.offsetWidth}px`
          this.fixedWrapperHeight = `${wrapper.offsetHeight}px`
          this.isFixed = true
        }

        onScroll?.(this.localOffsetTop, true)
      } else {
        this.isFixed = false

        onScroll?.(currentOffsetTop, false)
      }
    },

    async addScrollListener() {
      await doubleRaf()
      this.scroller = getParentScroller(this.$refs.stickyEl)
      this.scroller !== window && this.scroller.addEventListener('scroll', this.handleScroll)
      window.addEventListener('scroll', this.handleScroll)
      this.handleScroll()
    },

    removeScrollListener() {
      this.scroller !== window && this.scroller.removeEventListener('scroll', this.handleScroll)
      window.removeEventListener('scroll', this.handleScroll)
    },
  },
})
</script>
<style lang="less">
@import '../styles/common';
@import './sticky';
</style>
