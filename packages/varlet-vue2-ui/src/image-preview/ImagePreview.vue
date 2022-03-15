<template>
  <var-popup
    class="var-image-preview__popup"
    var-image-preview-cover
    transition="var-fade"
    :show="popupShow"
    :overlay="false"
    :close-on-click-overlay="false"
    :lock-scroll="lockScroll"
    :teleport="teleport"
    @open="$emit('open')"
    @close="$emit('close')"
    @closed="$emit('closed')"
    @opened="$emit('opened')"
    @route-change="$emit('route-change')"
  >
    <var-swipe
      class="var-image-preview__swipe"
      var-image-preview-cover
      :touchable="canSwipe"
      :indicator="indicator && images.length > 1"
      :initial-index="initialIndex"
      :loop="loop"
      @change="(index) => $emit('change', index)"
      v-bind="$attrs"
    >
      <template #default>
        <var-swipe-item
          class="var-image-preview__swipe-item"
          var-image-preview-cover
          v-for="image in images"
          :key="image"
        >
          <div
            class="var-image-preview__zoom-container"
            :style="{
              transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
              transitionTimingFunction,
              transitionDuration,
            }"
            @touchstart="handleTouchstart"
            @touchmove="handleTouchmove"
            @touchend="handleTouchend"
          >
            <img class="var-image-preview__image" :src="image" :alt="image" />
          </div>
        </var-swipe-item>
      </template>

      <template #indicator="{ index, length }">
        <slot name="indicator" :index="index" :length="length">
          <div class="var-image-preview__indicators" v-if="indicator && images.length > 1">
            {{ index + 1 }} / {{ length }}
          </div>
        </slot>
      </template>
    </var-swipe>

    <slot name="close-icon">
      <var-icon
        class="var-image-preview__close-icon"
        name="close-circle"
        var-image-preview-cover
        v-if="closeable"
        @click="close"
      />
    </slot>

    <div class="var-image-preview__extra">
      <slot name="extra" />
    </div>
  </var-popup>
</template>

<script>
import VarSwipe from '../swipe'
import VarSwipeItem from '../swipe-item'
import VarIcon from '../icon'
import VarPopup from '../popup'
import { defineComponent } from '../utils/create'
import { props } from './props'
import { toNumber } from '../utils/shared'

const DISTANCE_OFFSET = 12
const EVENT_DELAY = 200
const ANIMATION_DURATION = 200

export default defineComponent({
  name: 'VarImagePreview',

  components: {
    VarSwipe,
    VarSwipeItem,
    VarPopup,
    VarIcon,
  },

  inheritAttrs: false,

  props,

  data: () => ({
    popupShow: false,
    scale: 1,
    translateX: 0,
    translateY: 0,
    transitionTimingFunction: undefined,
    transitionDuration: undefined,
    canSwipe: true,
    startTouch: null,
    prevTouch: null,
    checker: null,
  }),

  computed: {
    initialIndex() {
      const { images, current } = this
      const index = images.findIndex((image) => image === current)
      return index >= 0 ? index : 0
    },
  },

  watch: {
    show: {
      handler(newValue) {
        this.popupShow = newValue
      },
      immediate: true,
    },
  },

  methods: {
    getDistance(touch, target) {
      const { clientX: touchX, clientY: touchY } = touch
      const { clientX: targetX, clientY: targetY } = target

      return Math.abs(Math.sqrt((targetX - touchX) ** 2 + (targetY - touchY) ** 2))
    },

    createVarTouch(touches, target) {
      return { clientX: touches.clientX, clientY: touches.clientY, timestamp: Date.now(), target }
    },

    zoomIn() {
      this.scale = toNumber(this.zoom)
      this.canSwipe = false
      this.prevTouch = null

      window.setTimeout(() => {
        this.transitionTimingFunction = 'linear'
        this.transitionDuration = '0s'
      }, ANIMATION_DURATION)
    },

    zoomOut() {
      this.scale = 1
      this.translateX = 0
      this.translateY = 0
      this.canSwipe = true
      this.prevTouch = null
      this.transitionTimingFunction = undefined
      this.transitionDuration = undefined
    },

    isDoubleTouch(currentTouch) {
      if (!this.prevTouch) {
        return false
      }

      return (
        this.getDistance(this.prevTouch, currentTouch) <= DISTANCE_OFFSET &&
        currentTouch.timestamp - this.prevTouch.timestamp <= EVENT_DELAY &&
        this.prevTouch.target === currentTouch.target
      )
    },

    isTapTouch(target) {
      if (!target || !this.startTouch || !this.prevTouch) {
        return false
      }

      return (
        this.getDistance(this.startTouch, this.prevTouch) <= DISTANCE_OFFSET &&
        (target === this.startTouch.target || target.parentNode === this.startTouch.target)
      )
    },

    handleTouchend(event) {
      this.checker = window.setTimeout(() => {
        this.isTapTouch(event.target) && this.close()
        this.startTouch = null
      }, EVENT_DELAY)
    },

    handleTouchstart(event) {
      this.checker && window.clearTimeout(this.checker)
      const { touches } = event
      const currentTouch = this.createVarTouch(touches[0], event.currentTarget)
      this.startTouch = currentTouch

      if (this.isDoubleTouch(currentTouch)) {
        this.scale > 1 ? this.zoomOut() : this.zoomIn()
        return
      }

      this.prevTouch = currentTouch
    },

    getZoom(target) {
      const { offsetWidth, offsetHeight } = target
      const { naturalWidth, naturalHeight } = target.querySelector('.var-image-preview__image')

      return {
        width: offsetWidth,
        height: offsetHeight,
        imageRadio: naturalHeight / naturalWidth,
        rootRadio: offsetHeight / offsetWidth,
        zoom: toNumber(this.zoom),
      }
    },

    getLimitX(target) {
      const { zoom, imageRadio, rootRadio, width, height } = this.getZoom(target)
      if (!imageRadio) {
        return 0
      }
      const displayWidth = imageRadio > rootRadio ? height / imageRadio : width
      return Math.max(0, (zoom * displayWidth - width) / 2) / zoom
    },

    getLimitY(target) {
      const { zoom, imageRadio, rootRadio, width, height } = this.getZoom(target)
      if (!imageRadio) {
        return 0
      }
      const displayHeight = imageRadio > rootRadio ? height : width * imageRadio
      return Math.max(0, (zoom * displayHeight - height) / 2) / zoom
    },

    getMoveTranslate(current, move, limit) {
      if (current + move >= limit) {
        return limit
      }

      if (current + move <= -limit) {
        return -limit
      }

      return current + move
    },

    handleTouchmove(event) {
      if (!this.prevTouch) {
        return
      }

      const target = event.currentTarget
      const { touches } = event
      const currentTouch = this.createVarTouch(touches[0], target)

      if (this.scale > 1) {
        const moveX = currentTouch.clientX - this.prevTouch.clientX
        const moveY = currentTouch.clientY - this.prevTouch.clientY

        const limitX = this.getLimitX(target)
        const limitY = this.getLimitY(target)

        this.translateX = this.getMoveTranslate(this.translateX, moveX, limitX)
        this.translateY = this.getMoveTranslate(this.translateY, moveY, limitY)
      }

      this.prevTouch = currentTouch
    },

    close() {
      if (this.scale > 1) {
        this.zoomOut()
        window.setTimeout(() => this.$emit('update:show', false), ANIMATION_DURATION)
        return
      }

      this.$emit('update:show', false)
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../icon/icon';
@import '../swipe/swipe';
@import '../swipe-item/swipeItem';
@import '../popup/popup';
@import './imagePreview';
</style>
