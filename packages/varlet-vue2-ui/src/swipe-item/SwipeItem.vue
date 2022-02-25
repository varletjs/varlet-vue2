<template>
  <div
    class="var-swipe-item"
    :style="{
      width: !vertical ? `${size}px` : undefined,
      height: vertical ? `${size}px` : undefined,
      transform: `translate${vertical ? 'Y' : 'X'}(${translate}px)`,
    }"
  >
    <slot />
  </div>
</template>

<script>
import { defineComponent } from '../utils/create'
import { createChildrenMixin } from '../utils/mixins/relation'

export default defineComponent({
  name: 'VarSwipeItem',

  mixins: [createChildrenMixin('swipe', { parentKey: 'swipe', childrenKey: 'swipeItems' })],

  data: () => ({
    translate: 0,
  }),

  computed: {
    size() {
      return this.swipe.size
    },

    vertical() {
      return this.swipe.vertical
    },
  },

  methods: {
    setTranslate(x) {
      this.translate = x
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './swipeItem';
</style>
