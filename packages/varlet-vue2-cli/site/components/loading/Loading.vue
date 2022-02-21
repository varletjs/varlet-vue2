<template>
  <div class="var-site-loading">
    <div class="var-site-loading__content" :class="[loading ? 'var-site-loading__content--active' : null]" v-if="hasSlots()">
      <slot />
    </div>
    <div class="var--box var-site-loading__body" :class="[hasSlots() ? 'var-site-loading__inside' : null]" v-if="isShow">
      <div class="var-site-loading__circle" v-if="type === 'circle'">
        <span
          class="var-site-loading__circle-block"
          :style="{
            width: getRadius * 2 + 'px',
            height: getRadius * 2 + 'px',
            color,
          }"
        >
          <svg viewBox="25 25 50 50">
            <circle cx="50" cy="50" r="20" fill="none"></circle>
          </svg>
        </span>
      </div>

      <template v-for="(nums, key) in loadingTypeDict">
        <div :key="key" :class="`var-site-loading__${key} var-site-loading__${key}-${size}`" v-if="type === key">
          <div
            v-for="num in nums"
            :key="num + key"
            :style="{ backgroundColor: color }"
            :class="`var-site-loading__${key}-item var-site-loading__${key}-item-${size}`"
          ></div>
        </div>
      </template>
      <div
        class="var-site-loading__description"
        :class="`var-site-loading__description--${size}`"
        :style="{ color }"
        v-if="hasSlots('description') || description"
      >
        <slot name="description">{{ description }}</slot>
      </div>
    </div>
  </div>
</template>

<script>
import { props } from './props'
import { toNumber } from '../utils/shared'
import { defineComponent } from '../utils/create'

export default defineComponent({
  name: 'VarSiteLoading',

  props,

  data: () => ({
    loadingTypeDict: {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3,
    },
    sizeDict: {
      mini: 9,
      small: 12,
      normal: 15,
      large: 18,
    },
  }),

  computed: {
    getRadius() {
      return this.radius ? toNumber(this.radius) : this.sizeDict[this.size]
    },

    isShow() {
      if (!this.hasSlots()) return true

      return this.loading
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './loading';
</style>
