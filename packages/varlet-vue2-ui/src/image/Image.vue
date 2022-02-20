<template>
  <div
    class="var-image var--box"
    :style="{
      width: toSizeUnit(width),
      height: toSizeUnit(height),
      'border-radius': toSizeUnit(radius),
    }"
    :class="[!block ? 'var--inline-block' : null]"
    v-ripple="{ disabled: !ripple }"
  >
    <img
      class="var-image__image"
      :alt="alt"
      :lazy-error="error"
      :lazy-loading="loading"
      :style="{ objectFit: fit }"
      v-if="lazy"
      v-lazy="src"
      @load="handleLoad"
      @error="handleError"
      @click="handleClick"
    />

    <img
      class="var-image__image"
      :alt="alt"
      :style="{ objectFit: fit }"
      :src="src"
      v-else
      @load="handleLoad"
      @error="handleError"
      @click="handleClick"
    />
  </div>
</template>

<script>
import Ripple from '../ripple'
import Lazy from '../lazy'
import { defineComponent } from '../utils/create'
import { props } from './props'
import { toSizeUnit } from '../utils/elements'

export default defineComponent({
  name: 'VarImage',

  directives: {
    Lazy,
    Ripple,
  },

  props,

  methods: {
    toSizeUnit,

    handleLoad(e) {
      const el = e.currentTarget
      const { lazy } = this
      const { onLoad, onError } = this.getListeners()

      if (lazy) {
        el._lazy.state === 'success' && onLoad?.(e)
        el._lazy.state === 'error' && onError?.(e)
      } else {
        onLoad?.(e)
      }
    },

    handleClick(e) {
      this.getListeners().onClick?.(e)
    },

    handleError(e) {
      const { lazy } = this
      const { onError } = this.getListeners()

      !lazy && onError?.(e)
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../ripple/ripple';
@import './image';
</style>
