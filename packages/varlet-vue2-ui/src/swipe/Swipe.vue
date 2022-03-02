<template>
  <div class="var-swipe" ref="swipeEl">
    <div
      class="var-swipe__track"
      :class="[vertical ? 'var-swipe--vertical' : null]"
      :style="{
        width: !vertical ? `${trackSize}px` : undefined,
        height: vertical ? `${trackSize}px` : undefined,
        transform: `translate${vertical ? 'Y' : 'X'}(${translate}px)`,
        transitionDuration: lockDuration ? `0ms` : `${toNumber(duration)}ms`,
      }"
      @touchstart="handleTouchstart"
      @touchmove="handleTouchmove"
      @touchend="handleTouchend"
    >
      <slot />
    </div>

    <slot name="indicator" :index="index" :length="swipeItems.length">
      <div
        class="var-swipe__indicators"
        :class="[vertical ? 'var-swipe--indicators-vertical' : null]"
        v-if="indicator && swipeItems.length"
      >
        <div
          class="var-swipe__indicator"
          :class="[
            index === idx ? 'var-swipe--indicator-active' : null,
            vertical ? 'var-swipe--indicator-vertical' : null,
          ]"
          :style="{ background: indicatorColor }"
          :key="l"
          v-for="(l, idx) in swipeItems.length"
          @click="to(idx)"
        ></div>
      </div>
    </slot>
  </div>
</template>

<script>
import { defineComponent } from '../utils/create'
import { doubleRaf, nextTickFrame } from '../utils/elements'
import { props } from './props'
import { isNumber, toNumber } from '../utils/shared'
import { createParentMixin } from '../utils/mixins/relation'

const SWIPE_DELAY = 250
const SWIPE_DISTANCE = 20

export default defineComponent({
  name: 'VarSwipe',

  mixins: [createParentMixin('swipe', { childrenKey: 'swipeItems' })],

  props,

  data: () => ({
    size: 0,
    trackSize: 0,
    translate: 0,
    lockDuration: false,
    index: 0,
    touching: false,
    timer: -1,
    startX: undefined,
    startY: undefined,
    startTime: undefined,
    prevX: undefined,
    prevY: undefined,
  }),

  mounted() {
    window.addEventListener('resize', this.resize)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.resize)
    this.stopAutoplay()
  },

  watch: {
    async swipeItems() {
      // In next, the size of the swipe cannot got when the route is change, need double raf
      await doubleRaf()
      this._initialIndex()
      this.resize()
    },
  },

  methods: {
    // expose
    resize() {
      this.lockDuration = true

      this.size = this.vertical ? this.$refs.swipeEl.offsetHeight : this.$refs.swipeEl.offsetWidth
      this.trackSize = this.size * this.swipeItems.length
      this.translate = this.index * -this.size

      this.swipeItems.forEach((swipeItem) => {
        swipeItem.setTranslate(0)
      })

      this.startAutoplay()

      window.setTimeout(() => {
        this.lockDuration = false
      })
    },

    // expose
    next() {
      if (this.swipeItems.length <= 1) {
        return
      }

      const { loop, getListeners } = this

      const currentIndex = this.index
      this.index = this.boundaryIndex(currentIndex + 1)
      getListeners().onChange?.(this.index)

      this.fixPosition(() => {
        if (currentIndex === this.swipeItems.length - 1 && loop) {
          this.findSwipeItem(0).setTranslate(this.trackSize)
          this.translate = this.swipeItems.length * -this.size
          return
        }

        if (currentIndex !== this.swipeItems.length - 1) {
          this.translate = this.index * -this.size
        }
      })
    },

    // expose
    prev() {
      if (this.swipeItems.length <= 1) {
        return
      }

      const { loop, getListeners } = this

      const currentIndex = this.index
      this.index = this.boundaryIndex(currentIndex - 1)
      getListeners().onChange?.(this.index)

      this.fixPosition(() => {
        if (currentIndex === 0 && loop) {
          this.findSwipeItem(this.swipeItems.length - 1).setTranslate(-this.trackSize)
          this.translate = this.size
          return
        }

        if (currentIndex !== 0) {
          this.translate = this.index * -this.size
        }
      })
    },

    // expose
    to(idx) {
      if (this.swipeItems.length <= 1 || idx === this.index) {
        return
      }

      idx = idx < 0 ? 0 : idx
      idx = idx >= this.swipeItems.length ? this.swipeItems.length : idx

      const task = idx > this.index ? this.next : this.prev

      Array.from({ length: Math.abs(idx - this.index) }).forEach(task)
    },

    toNumber,

    findSwipeItem(idx) {
      return this.swipeItems.find(({ index }) => index === idx)
    },

    dispatchBorrower() {
      const { translate, trackSize, size, loop, swipeItems } = this
      const { length } = swipeItems

      if (!loop) {
        return
      }
      // track越左边界
      if (translate >= 0) {
        this.findSwipeItem(length - 1).setTranslate(-trackSize)
      }
      // track越右边界
      if (translate <= -(trackSize - size)) {
        this.findSwipeItem(0).setTranslate(trackSize)
      }
      // track没越界
      if (translate > -(trackSize - size) && translate < 0) {
        this.findSwipeItem(length - 1).setTranslate(0)
        this.findSwipeItem(0).setTranslate(0)
      }
    },

    getSwipeIndex(targetSwipeIndex) {
      const { translate, size, swipeItems, loop } = this

      const swipeIndex = isNumber(targetSwipeIndex) ? targetSwipeIndex : Math.floor((translate - size / 2) / -size)

      if (swipeIndex <= -1) {
        return loop ? -1 : 0
      }

      if (swipeIndex >= swipeItems.length) {
        return loop ? swipeItems.length : swipeItems.length - 1
      }

      return swipeIndex
    },

    swipeIndexToIndex(swipeIndex) {
      const { loop, swipeItems } = this

      if (swipeIndex === -1) {
        return loop ? swipeItems.length - 1 : 0
      }

      if (swipeIndex === swipeItems.length) {
        return loop ? 0 : swipeItems.length - 1
      }

      return swipeIndex
    },

    boundaryIndex(index) {
      const { loop, swipeItems } = this

      if (index < 0) {
        return loop ? swipeItems.length - 1 : 0
      }

      if (index > swipeItems.length - 1) {
        return loop ? 0 : swipeItems.length - 1
      }

      return index
    },

    fixPosition(fn) {
      const { translate, size, trackSize, swipeItems } = this
      const overLeft = translate >= size
      const overRight = translate <= -trackSize
      const leftTranslate = 0
      const rightTranslate = -(trackSize - size)

      this.lockDuration = true
      // 检测是否有越界情况 越界修正
      if (overLeft || overRight) {
        this.lockDuration = true
        this.translate = overRight ? leftTranslate : rightTranslate
        this.findSwipeItem(0).setTranslate(0)
        this.findSwipeItem(swipeItems.length - 1).setTranslate(0)
      }

      nextTickFrame(() => {
        this.lockDuration = false
        fn?.()
      })
    },

    _initialIndex() {
      this.index = this.boundaryIndex(toNumber(this.initialIndex))
    },

    startAutoplay() {
      const { autoplay, swipeItems } = this

      if (!autoplay || swipeItems.length <= 1) {
        return
      }

      this.stopAutoplay()

      this.timer = window.setTimeout(() => {
        this.next()
        this.startAutoplay()
      }, toNumber(autoplay))
    },

    stopAutoplay() {
      this.timer && window.clearTimeout(this.timer)
    },

    getDirection(x, y) {
      if (x > y && x > 10) {
        return 'horizontal'
      }
      if (y > x && y > 10) {
        return 'vertical'
      }
    },

    handleTouchstart(event) {
      if (this.swipeItems.length <= 1 || !this.touchable) {
        return
      }

      const { clientX, clientY } = event.touches[0]
      this.startX = clientX
      this.startY = clientY
      this.startTime = performance.now()
      this.touching = true
      this.stopAutoplay()

      this.fixPosition(() => {
        this.lockDuration = true
      })
    },

    handleTouchmove(event) {
      const { touchable, vertical } = this

      if (!this.touching || !touchable) {
        return
      }

      const { clientX, clientY } = event.touches[0]
      const deltaX = Math.abs(clientX - this.startX)
      const deltaY = Math.abs(clientY - this.startY)
      const direction = this.getDirection(deltaX, deltaY)
      const expectDirection = vertical ? 'vertical' : 'horizontal'

      if (direction === expectDirection) {
        event.preventDefault()

        const moveX = this.prevX !== undefined ? clientX - this.prevX : 0
        const moveY = this.prevY !== undefined ? clientY - this.prevY : 0
        this.prevX = clientX
        this.prevY = clientY

        this.translate += vertical ? moveY : moveX

        this.dispatchBorrower()
      }
    },

    handleTouchend() {
      if (!this.touching) {
        return
      }

      const { vertical, getListeners } = this

      const positive = vertical ? this.prevY < this.startY : this.prevX < this.startX
      const distance = vertical ? Math.abs(this.startY - this.prevY) : Math.abs(this.startX - this.prevX)

      const quickSwiping = performance.now() - this.startTime <= SWIPE_DELAY && distance >= SWIPE_DISTANCE
      const swipeIndex = quickSwiping
        ? positive
          ? this.getSwipeIndex(this.index + 1)
          : this.getSwipeIndex(this.index - 1)
        : this.getSwipeIndex()

      this.touching = false
      this.lockDuration = false
      this.prevX = undefined
      this.prevY = undefined

      this.translate = swipeIndex * -this.size
      const prevIndex = this.index
      this.index = this.swipeIndexToIndex(swipeIndex)
      this.startAutoplay()

      prevIndex !== this.index && getListeners().onChange?.(this.index)
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './swipe';
</style>
