<template>
  <div
    class="var-back-top"
    ref="backTopEl"
    :class="[show ? 'var-back-top--active' : null]"
    :style="{
      right: toSizeUnit(right),
      bottom: toSizeUnit(bottom),
    }"
    @click.stop="click"
  >
    <slot>
      <var-button type="primary" round var-back-top-cover>
        <var-icon name="chevron-up" />
      </var-button>
    </slot>
  </div>
</template>
<script>
import { defineComponent } from '../utils/create'
import VarButton from '../button'
import VarIcon from '../icon'
import { props } from './props'
import { isString, easeInOutCubic, throttle, isObject } from '../utils/shared'
import { getScrollTop, getScrollLeft, scrollTo, getParentScroller, toPxNum, toSizeUnit } from '../utils/elements'

export default defineComponent({
  name: 'VarBackTop',

  components: {
    VarButton,
    VarIcon,
  },

  props,

  data: () => ({
    show: false,
    localTarget: undefined,
    throttleScroll: null,
  }),

  mounted() {
    this.throttleScroll = throttle(this.scroll, 200)
    this.localTarget = this.target ? this.getTarget() : getParentScroller(this.$refs.backTopEl)
    this.localTarget.addEventListener('scroll', this.throttleScroll)
  },

  destroyed() {
    this.localTarget.removeEventListener('scroll', this.throttleScroll)
  },

  methods: {
    toSizeUnit,

    click(e) {
      this.getListeners().onClick?.(e)
      const left = getScrollLeft(this.localTarget)
      scrollTo(this.localTarget, {
        left,
        duration: this.duration,
        animation: easeInOutCubic,
      })
    },

    scroll() {
      this.show = getScrollTop(this.localTarget) >= toPxNum(this.visibilityHeight)
    },

    getTarget() {
      if (isObject(this.target)) {
        return this.target
      }

      if (isString(this.target)) {
        const el = document.querySelector(this.target)

        if (!el) {
          throw Error('[Varlet] BackTop: target element cannot found')
        }

        return el
      }

      throw Error('[Varlet] BackTop: type of prop "target" should be a selector or an element object')
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../button/button';
@import '../icon/icon';
@import './backTop';
</style>
