<template>
  <div
    ref="freshNode"
    class="var-pull-refresh"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd"
    @touchcancel="touchEnd"
  >
    <div
      class="var-pull-refresh__control var-elevation--2"
      :class="[isSuccess ? 'var-pull-refresh__control-success' : null]"
      :style="controlStyle"
    >
      <var-icon :name="iconName" :transition="200" :class="iconClass" var-pull-refresh-cover />
    </div>
    <slot />
  </div>
</template>

<script>
import VarIcon from '../icon'
import { defineComponent } from '../utils/create'
import { getParentScroller, getScrollTop } from '../utils/elements'
import { props } from './props'
import { toNumber } from '../utils/shared'

const MAX_DISTANCE = 100
const CONTROL_POSITION = -50

let scroller

export default defineComponent({
  name: 'VarPullRefresh',

  components: {
    VarIcon,
  },

  props,

  data: () => ({
    freshNode: null,
    startPosition: 0,
    distance: CONTROL_POSITION,
    iconName: 'arrow-down',
    refreshStatus: 'default',
    isEnd: false,
  }),

  computed: {
    isTouchable() {
      return this.refreshStatus !== 'loading' && this.refreshStatus !== 'success' && !this.disabled
    },

    iconClass() {
      return {
        'var-pull-refresh__icon': true,
        'var-pull-refresh__animation': this.refreshStatus === 'loading',
      }
    },

    controlStyle() {
      return {
        transform: `translate3d(0px, ${this.distance}px, 0px) translate(-50%, 0)`,
        transition: this.isEnd ? `transform ${this.animationDuration}ms` : undefined,
        background: this.successBgColor || this.bgColor,
        color: this.successColor || this.color,
      }
    },

    isSuccess() {
      return this.refreshStatus === 'success'
    },
  },

  mounted() {
    scroller = getParentScroller(this.freshNode)
  },

  watch: {
    value(newValue) {
      if (newValue === false) {
        this.isEnd = true
        this.refreshStatus = 'success'
        this.iconName = 'checkbox-marked-circle'
        setTimeout(() => {
          this.distance = CONTROL_POSITION
          this.reset()
        }, toNumber(this.successDuration))
      }
    },
  },

  methods: {
    touchStart(event) {
      if (!this.isTouchable) return
      this.refreshStatus = 'pulling'
      this.startPosition = event.touches[0].clientY
    },

    touchMove(event) {
      const scrollTop = getScrollTop(scroller)
      if (scrollTop > 0 || !this.isTouchable) return
      if (scrollTop === 0 && this.distance > CONTROL_POSITION) event.cancelable && event.preventDefault()

      const moveDistance = (event.touches[0].clientY - this.startPosition) / 2 + CONTROL_POSITION

      this.distance = moveDistance >= MAX_DISTANCE ? MAX_DISTANCE : moveDistance
      this.iconName = this.distance >= MAX_DISTANCE * 0.2 ? 'refresh' : 'arrow-down'
    },

    touchEnd() {
      if (!this.isTouchable) return
      this.isEnd = true
      if (this.distance >= MAX_DISTANCE * 0.2) {
        this.refreshStatus = 'loading'
        this.distance = MAX_DISTANCE * 0.3
        this.getListeners().onInput?.(true)
        this.getListeners().onRefresh?.()
      } else {
        this.refreshStatus = 'loosing'
        this.iconName = 'arrow-down'
        this.distance = CONTROL_POSITION
        setTimeout(() => {
          this.isEnd = false
        }, toNumber(this.animationDuration))
      }
    },

    reset() {
      setTimeout(() => {
        this.refreshStatus = 'default'
        this.iconName = 'arrow-down'
        this.isEnd = false
      }, toNumber(this.animationDuration))
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../icon/icon';
@import './pullRefresh';
</style>
